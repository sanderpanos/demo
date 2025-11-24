import React from 'react';
import { AppState } from '../types';

interface WelcomeProps {
  setAppState: (state: AppState) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ setAppState }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl max-w-md w-full border border-white/20 text-center animate-fade-in-up">
        
        <div className="mb-6 relative">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full"></div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto relative z-10 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>

        <h1 className="text-3xl font-bold mb-2 tracking-wide">心灵时光机</h1>
        <p className="text-indigo-100 text-sm font-medium mb-8 uppercase tracking-widest">专业心理年龄深度测评</p>
        
        <div className="bg-black/20 rounded-xl p-4 mb-8 text-left space-y-3 border border-white/10">
          <div className="flex items-start gap-3">
             <div className="bg-white/20 p-1.5 rounded-full mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <p className="text-sm leading-relaxed text-gray-100">完全离线运行，保护您的隐私安全</p>
          </div>
          <div className="flex items-start gap-3">
             <div className="bg-white/20 p-1.5 rounded-full mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <p className="text-sm leading-relaxed text-gray-100">15个维度深度剖析潜意识年龄</p>
          </div>
          <div className="flex items-start gap-3">
             <div className="bg-white/20 p-1.5 rounded-full mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
             </div>
             <p className="text-sm leading-relaxed text-gray-100">获取专业级分析报告与PDF下载</p>
          </div>
        </div>

        <button 
          onClick={() => setAppState(AppState.QUIZ)}
          className="w-full py-4 bg-white text-indigo-600 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-50 active:scale-95 transition-all duration-200"
        >
          开始探索
        </button>
        
        <p className="mt-6 text-xs text-white/60">测评时长约 3 分钟 · 请凭直觉回答</p>
      </div>
    </div>
  );
};

export default Welcome;