import { GoogleGenAI, Type } from "@google/genai";
import { TrailData } from '../types';

const apiKey = process.env.API_KEY || '';
console.log('API Key loaded:', apiKey ? 'Yes' : 'No');
if (!apiKey) {
  console.error('API Key is not defined!');
}

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
  required: ["name", "location", "highlight", "difficulty", "duration", "length", "elevationGain"]
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
    try {
        console.log('开始获取基础信息:', query);
        
        // 尝试直接搜索路线信息 - 使用更强大的模型
        const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: `你是一个专业的户外向导。请返回关于徒步路线 "${query}" 的基本信息。
        
请确保所有输出都使用简体中文。
如果这不是一个已知的徒步路线，请尝试提供附近的徒步区域或相似路线的信息。
例如，如果查询过于宽泛，如"深圳登山"，请建议深圳的一条热门具体路线，如"深圳梧桐山"。
        
请提供有效的JSON格式数据，符合以下模式。`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: basicSchema,
        }
    });
    
    console.log('API响应成功:', response.text);
    const result = safeParseJSON(response.text) as Partial<TrailData>;
    
    // 验证返回的数据是否有效
    if (!result || !result.name || !result.location) {
        throw new Error("返回的路线信息不完整");
    }
    
    console.log('解析后的数据:', result);
    return result;
    } catch (error) {
        console.error('获取基础信息时出错:', error);
        
        // 如果第一次尝试失败，尝试更灵活的搜索方式
        try {
            console.log('尝试灵活搜索:', query);
            const fallbackResponse = await ai.models.generateContent({
                model: 'gemini-1.5-flash',
                contents: `你是一个专业的户外向导。用户正在寻找关于 "${query}" 的徒步信息。
                
如果这不是一个特定的徒步路线，请根据用户意图推荐一条热门或附近的徒步路线。
例如：
- "深圳登山" -> 推荐 "深圳梧桐山"
- "香港爬山" -> 推荐 "香港龙脊"
- "广州徒步" -> 推荐 "广州白云山"
- "塘朗山" -> 推荐 "深圳塘朗山"
- "麦理浩径" -> 推荐 "香港麦理浩径第二段"

请用简体中文提供推荐路线的基本信息。
请提供有效的JSON格式数据，符合以下模式。`,
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: basicSchema,
                }
            });
            
            console.log('灵活搜索API响应成功:', fallbackResponse.text);
            const fallbackResult = safeParseJSON(fallbackResponse.text) as Partial<TrailData>;
            
            if (!fallbackResult || !fallbackResult.name || !fallbackResult.location) {
                throw new Error("无法找到相关路线信息");
            }
            
            return {
                ...fallbackResult,
                // 添加一个标记，表示这是一个推荐路线
                isRecommended: true
            };
        } catch (fallbackError) {
            console.error('灵活搜索也失败:', fallbackError);
            throw new Error(`无法找到关于"${query}"的路线信息，请尝试输入更具体的路线名称。`);
        }
    }
}

// Stage 2a: Narrative & Misc (Fast Parallel)
export const generateTrailMisc = async (query: string, basicInfo: Partial<TrailData>): Promise<Partial<TrailData>> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash',
            contents: `你是一个户外故事讲述者。
        背景：为 "${basicInfo.name}"（位于 "${basicInfo.location}"）提供叙述性细节。
        请生成故事、装备清单、安全提示和最佳季节。
        保持鼓舞人心和有帮助的语调。
        重要提示：所有输出必须使用简体中文。
        请提供有效的JSON格式数据，符合以下模式。`,
            config: {
                responseMimeType: 'application/json',
                responseSchema: miscSchema,
            }
        });
        console.log('API响应成功:', response.text);
        const result = safeParseJSON(response.text) as Partial<TrailData>;
        console.log('解析后的数据:', result);
        return result;
    } catch (error) {
        console.error('获取基础信息时出错:', error);
        throw error;
    }
}

// Stage 2b: Routes (Slow/Thinking Parallel) - Updated Prompt
export const generateTrailRoutes = async (query: string, basicInfo: Partial<TrailData>): Promise<Partial<TrailData>> => {
    const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: `你是一个地理信息系统(GIS)专家和高级徒步向导。
        背景：为 "${basicInfo.name}"（位于 "${basicInfo.location}"）进行详细路线规划。
        中心坐标：${basicInfo.centerCoordinates?.latitude}, ${basicInfo.centerCoordinates?.longitude}。
        
        准确性关键指示：
        1. **禁止编造**：你必须为'timeline'中的每个检查点提供真实、准确的GPS坐标[纬度，经度]。
        2. **验证**：如果你不知道某块岩石/树木的确切坐标，请使用最近的主要地标（山峰、村庄、垭口、营地、小屋）的坐标。
        3. **结构**：'timeline'是真实来源。地图线将通过连接这些坐标点来绘制。
        4. **精度**：坐标使用至少4-5位小数，以确保地图上的准确性。
        5. 提供2个不同的路线选择（例如：观光路线与徒步路线）。
        6. 语言：所有输出必须使用简体中文。
        
        请提供有效的JSON格式数据，符合以下模式。`,
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