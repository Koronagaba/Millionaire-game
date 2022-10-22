export type SingleData = {
  id: number;
  question: string;
  answers: Answer[];
};

type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type Pyramid = {
    id: number,
    quantity: number
}