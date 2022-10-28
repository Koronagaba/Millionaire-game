export type SingleData = {
  id: number;
  question: string;
  answers: AnswerType[];
};

export type AnswerType = {
  id: number;
  answer: string;
  isCorrect: boolean;
};

export type Pyramid = {
  id: number;
  quantity: number;
  currency: "zł";
  safeHaven: "safeHaven" | "";
};
