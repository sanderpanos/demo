export interface Option {
  id: string;
  text: string;
  score: number; // 1: Youthful, 2: Mature, 3: Old Soul
  dimension: 'openness' | 'stability' | 'energy' | 'responsibility' | 'flexibility';
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface TestResult {
  mentalAge: number;
  title: string;
  description: string;
  characteristics: string[];
  advice: string;
  dimensions: {
    openness: number;
    stability: number;
    energy: number;
    responsibility: number;
    flexibility: number;
  };
}

export enum AppState {
  WELCOME = 'WELCOME',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
}