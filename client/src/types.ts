

export interface MysterySummary {
  id: number;
  title: string;
  tagline: string;
  totalStages: number;
  solved: boolean;
  isLocked: boolean;

}

export interface Clue {
  id: number;
  title: string;
  text: string;
}


export interface MysteryUnsolved {
  id: number;
  title: string;
  tagline: string;
  intro: string;
  totalStages: number;
  currentStage: number;
  solved: false;
  question: string;
  clues: Clue[];
  hintsUsed: number;
  hintsTotal: number;
  hints: string[];
  reveal: null;
}


export interface MysterySolved {
  id: number;
  title: string;
  totalStages: number;
  solved: true;
  reveal: string;
}

export type Mystery = MysteryUnsolved | MysterySolved;


export type CluesResponse = Clue[];

export interface AnswerResult {
  correct: boolean;
  message: string;
  solved?: boolean;
  currentStage?: number;
}

export interface HintResult {
  hint: string;
  currentStage: number;
  hintsUsed: number;
  hintsTotal: number;
}
