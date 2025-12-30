import React, { useState, useEffect } from 'react';
import HeroSearch from './components/HeroSearch';
import { TrailGuideView } from './components/TrailGuideView';
import LoadingScreen from './components/LoadingScreen';
import { generateBasicTrailInfo, generateTrailMisc, generateTrailRoutes } from './services/geminiService';
import { TrailData } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'guide' | 'saved'>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrail, setCurrentTrail] = useState<TrailData | null>(null);
  
  // Load saved plans from local storage on mount with error handling
  const [savedTrails, setSavedTrails] = useState<TrailData[]>(() => {
    try {
        const saved = localStorage.getItem('ecotrek_my_plans');
        return saved ? JSON.parse(saved) : [];
    } catch (e) {
        console.error("Failed to load saved trails:", e);
        return [];
    }
  });

  // Seed Mock Community Data
  useEffect(() => {
    const wugongKey = 'ecotrek_community_武功山';
    if (!localStorage.getItem(wugongKey)) {
        const mockCommunityData: TrailData = {
            name: "武功山",
            location: "中国江西省萍乡市",
            highlight: "云中草原，户外天堂，华东朝圣之路。",
            difficulty: 3,
            duration: "2-3天",
            length: "25-30公里",
            elevationGain: "1600米",
            description: "武功山以其广阔的高山草甸和壮观的云海日出而闻名。",
            story: "当你站在金顶之上，脚下是翻涌的云海，头顶是璀璨的星空...",
            routeSegments: [
                {
                    name: "正穿经典线 (沈子村-金顶)",
                    distance: "18km",
                    time: "8-10h",
                    description: "最经典的登山路线，路况成熟。",
                    landmarks: "沈子村 -> 九龙山 -> 铁蹄峰 -> 金顶",
                    timeline: []
                },
                {
                    name: "反穿精华线",
                    distance: "22km",
                    time: "2天1夜",
                    description: "驴友最爱路线。",
                    landmarks: "龙山村 -> 发云界 -> 绝望坡 -> 金顶",
                    timeline: [{name: "龙山村", description: "起点"}] 
                }
            ],
            gear: {
                essential: [{ item: "登山杖", reason: "保护膝盖" }],
                recommended: [{ item: "防晒霜", reason: "紫外线强" }]
            },
            safetyTips: ["雨天路滑建议避开。"],
            bestSeason: "5月-10月",
            communityTips: ["建议反穿！"]
        };
        localStorage.setItem(wugongKey, JSON.stringify(mockCommunityData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ecotrek_my_plans', JSON.stringify(savedTrails));
  }, [savedTrails]);

  const findLocalTrail = (query: string): TrailData | null => {
    const normalizedQuery = query.toLowerCase().trim();
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('ecotrek_community_')) {
        try {
          const json = localStorage.getItem(key);
          if (!json) continue;
          const data = JSON.parse(json) as TrailData;
          if (!data || !data.name) continue; // Safety check
          
          const trailName = data.name.toLowerCase();
          if (trailName.includes(normalizedQuery) || normalizedQuery.includes(trailName)) {
            return data;
          }
        } catch (e) { console.error(e); }
      }
    }
    return null;
  };

  const handleSearch = async (query: string) => {
    setIsLoading(true);

    try {
      // 1. Check Cache
      const cachedData = findLocalTrail(query);
      if (cachedData) {
        setCurrentTrail(cachedData);
        setView('guide');
        setIsLoading(false);
        return;
      }

      // 2. STAGE 1: Fast Fetch (Basic Info)
      const basicInfo = await generateBasicTrailInfo(query);
      
      const partialTrail: TrailData = {
          name: basicInfo.name!,
          location: basicInfo.location!,
          highlight: basicInfo.highlight!,
          difficulty: basicInfo.difficulty!,
          duration: basicInfo.duration!,
          length: basicInfo.length!,
          elevationGain: basicInfo.elevationGain!,
          centerCoordinates: basicInfo.centerCoordinates,
          // Placeholders
          description: undefined,
          story: undefined,
          routeSegments: undefined,
          gear: undefined,
          safetyTips: undefined,
          bestSeason: undefined,
          communityTips: undefined
      };

      setCurrentTrail(partialTrail);
      setView('guide');
      setIsLoading(false);

      // 3. STAGE 2: Parallel Background Fetch (Incremental Loading)
      
      // 3a. Fetch Misc (Story, Gear, etc.)
      const miscPromise = generateTrailMisc(query, basicInfo)
        .then((misc) => {
            setCurrentTrail(prev => {
                if (!prev) return null;
                return { ...prev, ...misc };
            });
            return misc;
        })
        .catch(err => {
            console.error("Misc details failed", err);
            return {};
        });

      // 3b. Fetch Routes (Thinking/Slow)
      const routesPromise = generateTrailRoutes(query, basicInfo)
        .then((routes) => {
            setCurrentTrail(prev => {
                if (!prev) return null;
                return { ...prev, ...routes };
            });
            return routes;
        })
        .catch(err => {
            console.error("Routes failed", err);
            return {};
        });

      // After BOTH finish, save to cache
      Promise.all([miscPromise, routesPromise]).then(([misc, routes]) => {
          const finalTrail = { ...partialTrail, ...misc, ...routes };
          const storageKey = `ecotrek_community_${finalTrail.name}`;
          localStorage.setItem(storageKey, JSON.stringify(finalTrail));
      });

    } catch (error) {
      alert("哎呀！向导似乎找不到这条路。请尝试输入更清晰的名称。");
      setIsLoading(false);
    }
  };

  const handleSaveTrail = (trail: TrailData) => {
    if (!savedTrails.find(t => t.name === trail.name)) {
      setSavedTrails([...savedTrails, trail]);
    } else {
        setSavedTrails(prev => prev.map(t => t.name === trail.name ? trail : t));
    }
  };

  const handleUpdateTrail = (updatedTrail: TrailData) => {
    setCurrentTrail(updatedTrail);
    const storageKey = `ecotrek_community_${updatedTrail.name}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedTrail));
    if (savedTrails.find(t => t.name === updatedTrail.name)) {
        setSavedTrails(prev => prev.map(t => t.name === updatedTrail.name ? updatedTrail : t));
    } else {
        setSavedTrails(prev => [updatedTrail, ...prev]); 
    }
  };

  const isCurrentSaved = currentTrail ? !!savedTrails.find(t => t.name === currentTrail.name) : false;

  return (
    <div className="min-h-screen relative font-sans">
      {isLoading && <LoadingScreen />}

      {!isLoading && view === 'home' && (
        <HeroSearch 
          onSearch={handleSearch} 
          isLoading={isLoading} 
          savedTrails={savedTrails}
          onSelectTrail={(trail) => {
              setCurrentTrail(trail);
              setView('guide');
          }}
        />
      )}

      {!isLoading && view === 'guide' && currentTrail && (
        <TrailGuideView 
          data={currentTrail} 
          onBack={() => setView('home')} 
          onSave={handleSaveTrail}
          onUpdate={handleUpdateTrail}
          onSearch={handleSearch}
          isSaved={isCurrentSaved}
        />
      )}

      {!isLoading && view === 'saved' && (
        <div className="min-h-screen bg-earth-50 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-earth-800">我的徒步计划</h1>
                    <button onClick={() => setView('home')} className="text-forest-600 font-medium hover:underline">
                        + 探索更多
                    </button>
                </div>
                {savedTrails.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-earth-300">
                        <p className="text-earth-400">还没有保存路线，快去探索吧！</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {savedTrails.map((trail, idx) => (
                            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-earth-100 group">
                                <div className="h-40 overflow-hidden relative">
                                    <img 
                                        src={`https://picsum.photos/seed/${trail.name.replace(/\s/g, '')}/800/400`} 
                                        alt={trail.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <h3 className="absolute bottom-3 left-4 text-white font-bold text-xl">{trail.name}</h3>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm text-earth-600 mb-4 line-clamp-2">{trail.highlight}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs font-bold text-forest-600 bg-forest-50 px-2 py-1 rounded">
                                            {trail.length} • {trail.duration}
                                        </div>
                                        <button 
                                            onClick={() => {
                                                setCurrentTrail(trail);
                                                setView('guide');
                                            }}
                                            className="text-forest-700 font-medium text-sm hover:underline"
                                        >
                                            查看指南 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      )}
    </div>
  );
};

export default App;