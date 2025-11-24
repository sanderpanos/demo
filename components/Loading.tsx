import React, { useEffect, useState } from 'react';
import { AppState } from '../types';

interface LoadingProps {
  setAppState: (state: AppState) => void;
}

const Loading: React.FC<LoadingProps> = ({ setAppState }) => {
  const [text, setText] = useState("正在整合维度数据...");

  useEffect(() => {
    const steps = [
      { t: "正在整合维度数据...", d: 0 },
      { t: "分析潜意识行为模式...", d: 1000 },
      { t: "构建心理年龄模型...", d: 2000 },
      { t: "生成专业报告...", d: 3000 },
    ];

    steps.forEach(step => {
      setTimeout(() => setText(step.t), step.d);
    });

    setTimeout(() => {
      setAppState(AppState.RESULT);
    }, 4500);
  }, [setAppState]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
         <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 mb-8 relative">
          <div className="absolute inset-0 border-4 border-indigo-500/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
          <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
             <span className="text-2xl">🧠</span>
          </div>
        </div>
        
        <h2 className="text-xl font-medium tracking-wider animate-pulse">{text}</h2>
        <div className="mt-8 w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 animate-progress origin-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;