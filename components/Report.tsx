import React, { useMemo } from 'react';
import { Option, TestResult } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

interface ReportProps {
  answers: Option[];
  reset: () => void;
}

const Report: React.FC<ReportProps> = ({ answers, reset }) => {
  
  const result = useMemo((): TestResult => {
    // Basic Scoring Logic
    let totalScore = 0;
    const dimensions = {
      openness: 0,
      stability: 0,
      energy: 0,
      responsibility: 0,
      flexibility: 0
    };
    
    // Count occurrences for chart normalization
    const dimCounts = {
      openness: 0,
      stability: 0,
      energy: 0,
      responsibility: 0,
      flexibility: 0
    };

    answers.forEach(a => {
      totalScore += a.score;
      if (dimensions[a.dimension] !== undefined) {
        dimensions[a.dimension] += (a.score === 1 ? 80 : a.score === 2 ? 60 : 40); // Inverse mapping for chart appeal (Youthful = high energy/openness usually)
        // Adjust logic specific to dimension meaning. 
        // Let's simplify: 
        // 1 (Youth) -> High Energy, High Openness, Low Stability
        // 3 (Old) -> High Stability, High Responsibility, Low Openness
        
        if (a.dimension === 'energy' || a.dimension === 'openness') {
             dimensions[a.dimension] += (a.score === 1 ? 30 : a.score === 2 ? 20 : 10);
        } else {
             dimensions[a.dimension] += (a.score === 3 ? 30 : a.score === 2 ? 20 : 10);
        }
        dimCounts[a.dimension]++;
      }
    });

    // Average scores for chart (0-100 scale approximation)
    // This is a heuristic algorithm for the demo
    const chartData = {
        openness: Math.min(100, 40 + dimensions.openness),
        stability: Math.min(100, 30 + dimensions.stability),
        energy: Math.min(100, 40 + dimensions.energy),
        responsibility: Math.min(100, 20 + dimensions.responsibility),
        flexibility: Math.min(100, 30 + dimensions.flexibility),
    }

    // Determine Mental Age
    // 15 questions. Min score 15 (Pure Child), Max 45 (Pure Sage).
    // Range mapping:
    // 15-20: 幼童期 (5-12岁)
    // 21-27: 青春期 (13-22岁)
    // 28-34: 青年期 (23-35岁)
    // 35-40: 成熟期 (36-50岁)
    // 41-45: 智者期 (50岁+)
    
    let mentalAge = 0;
    let title = "";
    let desc = "";
    let characteristics: string[] = [];
    let advice = "";

    if (totalScore <= 22) {
      mentalAge = Math.floor(Math.random() * (16 - 8 + 1) + 8);
      title = "纯真梦想家";
      desc = "你的内心住着一个永远长不大的孩子，对世界充满好奇，保有最纯粹的赤子之心。";
      characteristics = ["好奇心强", "情绪直接", "富有想象力", "依赖直觉"];
      advice = "保持这份珍贵的纯真，但也试着在重要决策时多一分理性思考。";
    } else if (totalScore <= 30) {
      mentalAge = Math.floor(Math.random() * (24 - 17 + 1) + 17);
      title = "热血探索者";
      desc = "你正处于人生精力和野心最旺盛的心理阶段，敢于挑战，不甘平庸。";
      characteristics = ["行动力强", "渴望认可", "略带叛逆", "适应力好"];
      advice = "你的冲劲是最大的资产，学会管理耐心，你的成就会更加稳固。";
    } else if (totalScore <= 38) {
      mentalAge = Math.floor(Math.random() * (35 - 25 + 1) + 25);
      title = "平衡实干家";
      desc = "你拥有最黄金的心理年龄，既有年轻人的活力，又有成年人的稳重。";
      characteristics = ["逻辑清晰", "情绪稳定", "目标明确", "责任感强"];
      advice = "你是周围人的依靠，但别忘了偶尔给自己放个假，不必时刻紧绷。";
    } else {
      mentalAge = Math.floor(Math.random() * (60 - 45 + 1) + 45);
      title = "通透智者";
      desc = "你的心理年龄远超同龄人，看淡浮华，追求内心的宁静与本质。";
      characteristics = ["极度从容", "洞察力强", "喜好独处", "与世无争"];
      advice = "你的智慧能指引他人，多尝试接触新鲜事物，避免心态过早封闭。";
    }

    return {
      mentalAge,
      title,
      description: desc,
      characteristics,
      advice,
      dimensions: chartData
    };
  }, [answers]);

  const radarData = [
    { subject: '开放性', A: result.dimensions.openness, fullMark: 100 },
    { subject: '稳定性', A: result.dimensions.stability, fullMark: 100 },
    { subject: '活力值', A: result.dimensions.energy, fullMark: 100 },
    { subject: '责任感', A: result.dimensions.responsibility, fullMark: 100 },
    { subject: '适应力', A: result.dimensions.flexibility, fullMark: 100 },
  ];

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 print:bg-white print:pb-0">
      {/* Banner Image / Header */}
      <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden print:hidden">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
         <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
         <div className="absolute bottom-4 left-6 text-white">
            <h1 className="text-3xl font-bold">测评报告</h1>
            <p className="opacity-80 text-sm mt-1">Mental Age Assessment Report</p>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-10 relative z-10 print:mt-0 print:px-0">
        
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 print:shadow-none print:border-none print:p-0">
          
          <div className="text-center border-b border-gray-100 pb-8 mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">您的心理年龄约为</p>
            <div className="relative inline-block">
                <span className="text-7xl font-bold text-indigo-600">{result.mentalAge}</span>
                <span className="text-xl text-gray-400 absolute -right-6 bottom-2">岁</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{result.title}</h2>
            <p className="text-gray-600 mt-3 leading-relaxed max-w-lg mx-auto">{result.description}</p>
          </div>

          {/* Radar Chart */}
          <div className="h-72 w-full mb-8">
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="维度"
                    dataKey="A"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    fill="#6366f1"
                    fillOpacity={0.4}
                  />
                </RadarChart>
             </ResponsiveContainer>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 print:grid-cols-2 print:gap-4">
             <div className="bg-gray-50 rounded-xl p-5 print:border print:bg-white">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                    性格关键词
                </h3>
                <div className="flex flex-wrap gap-2">
                    {result.characteristics.map(c => (
                        <span key={c} className="bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-medium border border-indigo-100 shadow-sm print:border-gray-200 print:text-gray-800">
                            {c}
                        </span>
                    ))}
                </div>
             </div>
             <div className="bg-indigo-50 rounded-xl p-5 print:border print:bg-white">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                    专属建议
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    {result.advice}
                </p>
             </div>
          </div>

          {/* Footer for Print */}
          <div className="hidden print:block text-center mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-400">心灵时光机 - 专业心理年龄测评</p>
              <p className="text-xs text-gray-300 mt-1">此报告由算法自动生成，仅供自我探索参考</p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 print:hidden">
            <button 
                onClick={handleDownload}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                下载专业PDF报告
            </button>
            <button 
                onClick={reset}
                className="w-full bg-white text-gray-600 py-4 rounded-xl font-medium border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all"
            >
                重新测试
            </button>
        </div>

      </div>
    </div>
  );
};

export default Report;