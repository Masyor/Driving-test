export interface Question {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  b1Explanation: string;
  signType?: 'speed_30' | 'speed_60' | 'no_entry' | 'give_way' | 'one_way' | 'national_speed' | 'zebra_crossing' | 'stop';
}

export interface Vocabulary {
  word: string;
  definition: string;
  b1Example: string;
  partOfSpeech: string;
}

export interface TestAttempt {
  id: string;
  date: string;
  score: number;
  totalQuestions: number;
  mode: string;
  category?: string;
  passed: boolean;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: { [questionId: string]: number }; // questionId -> selectedOptionIndex
  isSubmitted: boolean;
  score: number;
  startTime: number;
  durationSeconds: number;
}
