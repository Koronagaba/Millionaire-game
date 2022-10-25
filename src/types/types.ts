export type SingleData = {
  id: number;
  question: string;
  answers: Answer[];
};

export type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type Pyramid = {
  id: number;
  quantity: number ;
  currency: "zł"
  safeHaven: "safeHaven" | "";
};
