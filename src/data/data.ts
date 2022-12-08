import { Pyramid, SingleData } from "../types/types";

const easyData: SingleData[] = [
  {
    id: 1,
    question: "Whats your name?",
    answers: [
      { id: 1, answer: "Wiktor", isCorrect: false},
      { id: 2, answer: "Leon", isCorrect: true },
      { id: 3, answer: "Michał", isCorrect: false },
      { id: 4, answer: "Walenty", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Second Question Second Question Second Question Second Question Second Question",
    answers: [
      { id: 1, answer: "first answer", isCorrect: false },
      { id: 2, answer: "second answer second answer second answer", isCorrect: false },
      { id: 3, answer: "third answer third answer third answer third answer third answer", isCorrect: false },
      { id: 4, answer: "Tfourth answer", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Third quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Fourth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 5,
    question: "Fifth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Sixth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Seventh quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "Eighth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Nineth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "10th quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
];
//// medium
const mediumData: SingleData[] = [
  {
    id: 11,
    question: "mWhats your name?",
    answers: [
      { id: 1, answer: "Wiktor", isCorrect: false },
      { id: 3, answer: "Leon", isCorrect: true },
      { id: 2, answer: "Michał", isCorrect: false },
      { id: 4, answer: "Walenty", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "mSecond Question",
    answers: [
      { id: 1, answer: "first answer", isCorrect: false },
      { id: 2, answer: "second answer", isCorrect: false },
      { id: 3, answer: "third answer", isCorrect: false },
      { id: 4, answer: "Tfourth answer", isCorrect: true },
    ],
  },
  {
    id: 13,
    question: "mThird quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "mFourth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 15,
    question: "mFifth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "mSixth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 17,
    question: "mSeventh quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 18,
    question: "mEighth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 19,
    question: "mNineth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "m10th quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
];
////// quite difficult
const quiteDifficultData: SingleData[] = [
  {
    id: 21,
    question: "qWhats your name?",
    answers: [
      { id: 1, answer: "Wiktor", isCorrect: false },
      { id: 2, answer: "Leon", isCorrect: true },
      { id: 3, answer: "Michał", isCorrect: false },
      { id: 4, answer: "Walenty", isCorrect: false },
    ],
  },
  {
    id: 22,
    question: "qSecond Question",
    answers: [
      { id: 1, answer: "first answer", isCorrect: false },
      { id: 2, answer: "second answer", isCorrect: false },
      { id: 3, answer: "third answer", isCorrect: false },
      { id: 4, answer: "Tfourth answer", isCorrect: true },
    ],
  },
  {
    id: 23,
    question: "qThird quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 24,
    question: "qFourth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 25,
    question: "qFifth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 26,
    question: "qSixth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 27,
    question: "qSeventh quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 28,
    question: "qEighth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 29,
    question: "qNineth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 30,
    question: "q10th quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
];

/////// Difficult
const difficultData: SingleData[] = [
  {
    id: 31,
    question: "dWhats your name?",
    answers: [
      { id: 1, answer: "Wiktor", isCorrect: false },
      { id: 2, answer: "Leon", isCorrect: true },
      { id: 3, answer: "Michał", isCorrect: false },
      { id: 4, answer: "Walenty", isCorrect: false },
    ],
  },
  {
    id: 32,
    question: "dSecond Question",
    answers: [
      { id: 1, answer: "first answer", isCorrect: false },
      { id: 2, answer: "second answer", isCorrect: false },
      { id: 3, answer: "third answer", isCorrect: false },
      { id: 4, answer: "Tfourth answer", isCorrect: true },
    ],
  },
  {
    id: 33,
    question: "dThird quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 34,
    question: "dFourth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 35,
    question: "dFifth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 36,
    question: "dSixth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 37,
    question: "dSeventh quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "Tfourth", isCorrect: true },
    ],
  },
  {
    id: 38,
    question: "dEighth quest?",
    answers: [
      { id: 1, answer: "first", isCorrect: false },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "Tthird", isCorrect: true },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 39,
    question: "dNineth quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
  {
    id: 40,
    question: "d10th quest?",
    answers: [
      { id: 1, answer: "Tfirst", isCorrect: true },
      { id: 2, answer: "second", isCorrect: false },
      { id: 3, answer: "third", isCorrect: false },
      { id: 4, answer: "fourth", isCorrect: false },
    ],
  },
];

export const pyramid: Pyramid[] = [
  { id: 1, quantity: 500, currency: "$", safeHaven: "" },
  { id: 2, quantity: 1000, currency: "$", safeHaven: "safeHaven" },
  { id: 3, quantity: 2000, currency: "$", safeHaven: "" },
  { id: 4, quantity: 5000, currency: "$", safeHaven: "" },
  { id: 5, quantity: 10000, currency: "$", safeHaven: "" },
  { id: 6, quantity: 20000, currency: "$", safeHaven: "" },
  { id: 7, quantity: 40000, currency: "$", safeHaven: "safeHaven" },
  { id: 8, quantity: 75000, currency: "$", safeHaven: "" },
  { id: 9, quantity: 125000, currency: "$", safeHaven: "" },
  { id: 10, quantity: 250000, currency: "$", safeHaven: "" },
  { id: 11, quantity: 500000, currency: "$", safeHaven: "" },
  { id: 12, quantity: 1000000, currency: "$", safeHaven: "safeHaven" },
];

export { easyData, mediumData, quiteDifficultData, difficultData };
