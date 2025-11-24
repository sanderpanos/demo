import React, { useState } from 'react';
import { AppState, Option } from './types';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Loading from './components/Loading';
import Report from './components/Report';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [answers, setAnswers] = useState<Option[]>([]);

  const handleReset = () => {
    setAnswers([]);
    setAppState(AppState.WELCOME);
  };

  return (
    <div className="antialiased text-gray-900 font-sans">
      {appState === AppState.WELCOME && (
        <Welcome setAppState={setAppState} />
      )}
      {appState === AppState.QUIZ && (
        <Quiz setAppState={setAppState} setAnswers={setAnswers} />
      )}
      {appState === AppState.ANALYZING && (
        <Loading setAppState={setAppState} />
      )}
      {appState === AppState.RESULT && (
        <Report answers={answers} reset={handleReset} />
      )}
    </div>
  );
};

export default App;