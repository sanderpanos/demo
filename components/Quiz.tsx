import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { Option, AppState } from '../types';

interface QuizProps {
  setAppState: (state: AppState) => void;
  setAnswers: (answers: Option[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ setAppState, setAnswers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  const handleOptionSelect = (option: Option) => {
    setIsExiting(true);
    
    // Slight delay for animation
    setTimeout(() => {
      const newAnswers = [...selectedOptions, option];
      setSelectedOptions(newAnswers);

      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setIsExiting(false);
      } else {
        setAnswers(newAnswers);
        setAppState(AppState.ANALYZING);
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header / Progress */}
      <div className="bg-white shadow-sm pt-4 pb-2 px-6 sticky top-0 z-10">
        <div className="flex justify-between items-end mb-2">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Question {currentIndex + 1} / {QUESTIONS.length}</span>
           <span className="text-indigo-600 font-bold text-lg">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
        <div 
            className={`w-full transition-all duration-300 transform ${isExiting ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'}`}
        >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionSelect(option)}
                  className="w-full text-left p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 active:scale-[0.98] group"
                >
                  <div className="flex items-center justify-between">
                     <span className="text-gray-700 font-medium text-lg group-hover:text-indigo-700">{option.text}</span>
                     <div className="h-5 w-5 rounded-full border-2 border-gray-300 group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                  </div>
                </button>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;