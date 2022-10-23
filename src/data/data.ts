import { Pyramid, SingleData } from "../types/types";

const data: SingleData[] = [
  {
    id: 1,
    question: "Whats your name?",
    answers: [
      {
        answer: "Wiktor",
        isCorrect: false,
      },
      {
        answer: "Leon",
        isCorrect: true,
      },
      {
        answer: "Michał",
        isCorrect: false,
      },
      {
        answer: "Walenty",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "Second Question",
    answers: [
      {
        answer: "first answer",
        isCorrect: false,
      },
      {
        answer: "second answer",
        isCorrect: false,
      },
      {
        answer: "third answer",
        isCorrect: false,
      },
      {
        answer: "fourth answer",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: "Third quest?",
    answers: [
      {
        answer: "first",
        isCorrect: true,
      },
      {
        answer: "second",
        isCorrect: false,
      },
      {
        answer: "third",
        isCorrect: false,
      },
      {
        answer: "fourth",
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: "Fourth quest?",
    answers: [
      {
        answer: "first",
        isCorrect: false,
      },
      {
        answer: "second",
        isCorrect: false,
      },
      {
        answer: "third",
        isCorrect: false,
      },
      {
        answer: "fourth",
        isCorrect: true,
      },
    ],
  },
  {
    id: 5,
    question: "Fifth quest?",
    answers: [
      {
        answer: "first",
        isCorrect: true,
      },
      {
        answer: "second",
        isCorrect: false,
      },
      {
        answer: "third",
        isCorrect: false,
      },
      {
        answer: "fourth",
        isCorrect: false,
      },
    ],
  },
];

const pyramid: Pyramid[] = [
  { id: 12, quantity: 1000000, currency: "zł", safeHaven: "safeHaven" },
  { id: 11, quantity: 500000, currency: "zł", safeHaven: "" },
  { id: 10, quantity: 250000, currency: "zł", safeHaven: "" },
  { id: 9, quantity: 125000, currency: "zł", safeHaven: "" },
  { id: 8, quantity: 75000, currency: "zł", safeHaven: "" },
  { id: 7, quantity: 40000, currency: "zł", safeHaven: "safeHaven" },
  { id: 6, quantity: 20000, currency: "zł", safeHaven: "" },
  { id: 5, quantity: 10000, currency: "zł", safeHaven: "" },
  { id: 4, quantity: 5000, currency: "zł", safeHaven: "" },
  { id: 3, quantity: 2000, currency: "zł", safeHaven: "" },
  { id: 2, quantity: 1000, currency: "zł", safeHaven: "safeHaven" },
  { id: 1, quantity: 500, currency: "zł", safeHaven: "" },
];

export { data, pyramid };
