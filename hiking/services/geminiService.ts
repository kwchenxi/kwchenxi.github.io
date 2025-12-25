import { GoogleGenAI, Type } from "@google/genai";
import { TrailData } from '../types';

const apiKey = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey });

// Helper to safely parse JSON from chatty AI responses
const safeParseJSON = (text: string | undefined) => {
    if (!text) throw new Error("No response from AI");
    // Remove markdown code blocks if present
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    try {
        return JSON.parse(cleanText);
    } catch (e) {
        console.error("Failed to parse JSON:", text);
        throw new Error("Invalid JSON response from AI");
    }
};

// 1. Basic Schema (Fast Load - Stage 1)
const basicSchema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING, description: "Official name of the trail or mountain in Chinese." },
    location: { type: Type.STRING, description: "Specific geographic location in Chinese." },
    centerCoordinates: {
        type: Type.OBJECT,
        properties: {
            latitude: { type: Type.NUMBER, description: "Latitude of the trail head or mountain peak." },
            longitude: { type: Type.NUMBER, description: "Longitude of the trail head or mountain peak." }
        },
        required: ["latitude", "longitude"],
        description: "The central geo-coordinates for the map view."
    },
    highlight: { type: Type.STRING, description: "One engaging sentence summarizing the trail's unique appeal in Chinese." },
    difficulty: { type: Type.NUMBER, description: "Difficulty rating from 1 (Easy) to 5 (Expert)." },
    duration: { type: Type.STRING, description: "Estimated time to complete in Chinese (e.g., '6-8 小时')." },
    length: { type: Type.STRING, description: "Total distance in Chinese (e.g., '15 公里')." },
    elevationGain: { type: Type.STRING, description: "Cumulative elevation gain in Chinese (e.g., '800 米')." },
  },
  required: ["name", "location", "centerCoordinates", "highlight", "difficulty", "duration", "length", "elevationGain"]
};

// 2. Misc Schema (Fast Detail - Stage 2a)
const miscSchema = {
  type: Type.OBJECT,
  properties: {
    description: { type: Type.STRING, description: "A factual overview in Chinese." },
    story: { type: Type.STRING, description: "A concise narrative describing the experience in Chinese." },
    gear: {
      type: Type.OBJECT,
      properties: {
        essential: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              item: { type: Type.STRING, description: "Item name in Chinese." },
              reason: { type: Type.STRING, description: "Reason in Chinese." }
            },
            required: ["item", "reason"]
          },
          description: "Top 3 essential items."
        },
        recommended: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              item: { type: Type.STRING, description: "Item name in Chinese." },
              reason: { type: Type.STRING, description: "Reason in Chinese." }
            },
            required: ["item", "reason"]
          },
          description: "Top 3 recommended items."
        }
      },
      required: ["essential", "recommended"]
    },
    safetyTips: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Top 3 important safety tips in Chinese." },
    bestSeason: { type: Type.STRING, description: "Best months in Chinese." },
    communityTips: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Top 2 brief community tips in Chinese." },
  },
  required: ["description", "story", "gear", "safetyTips", "bestSeason", "communityTips"]
};

// 3. Routes Schema (Thinking/Slow - Stage 2b) - UPDATED for Real Coordinates
const routesSchema = {
  type: Type.OBJECT,
  properties: {
    routeSegments: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Segment name in Chinese (e.g. '经典正穿', '西脊线')." },
          distance: { type: Type.STRING, description: "Total distance." },
          time: { type: Type.STRING, description: "Total time." },
          description: { type: Type.STRING, description: "Overview of this specific route option in Chinese." },
          landmarks: { type: Type.STRING, description: "Summary string of key nodes in Chinese (e.g. 'A->B->C')." },
          timeline: {
            type: Type.ARRAY,
            description: "CRITICAL: Step-by-step waypoints with REAL coordinates.",
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "Name of the checkpoint (e.g. '绝望坡')." },
                    coordinates: {
                        type: Type.ARRAY,
                        items: { type: Type.NUMBER },
                        description: "REAL GPS [Latitude, Longitude]. Do not hallucinate."
                    },
                    distance: { type: Type.STRING, description: "Distance from start." },
                    time: { type: Type.STRING, description: "Time from start." },
                    description: { type: Type.STRING, description: "Details about terrain/view." },
                    highlights: { type: Type.STRING, description: "Key photo spot." }
                },
                required: ["name", "coordinates", "description"]
            }
          }
        },
        required: ["name", "distance", "time", "description", "landmarks", "timeline"]
      },
      description: "Generate exactly 2 distinct route options."
    }
  },
  required: ["routeSegments"]
};

// Stage 1: Fast Basic Info
export const generateBasicTrailInfo = async (query: string): Promise<Partial<TrailData>> => {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an expert outdoor guide. Return the basic stats for the hiking trail: "${query}".
        Ensure all output is in Simplified Chinese (简体中文).
        Return valid JSON only.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: basicSchema,
        }
    });
    return safeParseJSON(response.text) as Partial<TrailData>;
}

// Stage 2a: Narrative & Misc (Fast Parallel)
export const generateTrailMisc = async (query: string, basicInfo: Partial<TrailData>): Promise<Partial<TrailData>> => {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are an outdoor storyteller.
        Context: Providing narrative details for "${basicInfo.name}" in "${basicInfo.location}".
        Generate the story, gear list, safety tips, and best season.
        Keep the tone inspiring and helpful.
        IMPORTANT: All output must be in Simplified Chinese (简体中文).
        Return JSON only.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: miscSchema,
        }
    });
    return safeParseJSON(response.text) as Partial<TrailData>;
}

// Stage 2b: Routes (Slow/Thinking Parallel) - Updated Prompt
export const generateTrailRoutes = async (query: string, basicInfo: Partial<TrailData>): Promise<Partial<TrailData>> => {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a GIS (Geographic Information System) expert and Senior Hiking Guide.
        Context: Detailed route planning for "${basicInfo.name}" in "${basicInfo.location}".
        Center Coordinates: ${basicInfo.centerCoordinates?.latitude}, ${basicInfo.centerCoordinates?.longitude}.
        
        CRITICAL INSTRUCTIONS FOR ACCURACY:
        1. **NO HALLUCINATIONS**: You must provide REAL, ACCURATE GPS coordinates [Latitude, Longitude] for every checkpoint in the 'timeline'.
        2. **VERIFICATION**: If you do not know the exact coordinate of a rock/tree, use the coordinate of the nearest major landmark (peak, village, pass, campsite, hut).
        3. **STRUCTURE**: The 'timeline' is the source of truth. The map line will be drawn by connecting these coordinate points.
        4. **PRECISION**: Use at least 4-5 decimal places for coordinates to ensure accuracy on the map.
        5. Provide 2 distinct route options (e.g., Tourist vs Trekking).
        6. LANGUAGE: All output must be in Simplified Chinese (简体中文).
        
        Return JSON only.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: routesSchema,
            thinkingConfig: {
                thinkingBudget: 2048
            }
        }
    });

    return safeParseJSON(response.text) as Partial<TrailData>;
}

export const generateTrailGuide = async (query: string): Promise<TrailData> => {
    const basic = await generateBasicTrailInfo(query);
    const [misc, routes] = await Promise.all([
        generateTrailMisc(query, basic),
        generateTrailRoutes(query, basic)
    ]);
    return { ...basic, ...misc, ...routes } as TrailData;
};