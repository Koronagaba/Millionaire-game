const data = [
  {
    id: 1,
    question: "What is Your name?",
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
    id: 1,
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
];

const pyramid = [
  { id: 1, quantity: 500 },
  { id: 2, quantity: 1000 },
  { id: 3, quantity: 2000 },
  { id: 4, quantity: 5000 },
  { id: 5, quantity: 10000 },
  { id: 6, quantity: 20000 },
  { id: 7, quantity: 40000 },
  { id: 8, quantity: 75000 },
  { id: 9, quantity: 125000 },
  { id: 10, quantity: 250000 },
  { id: 11, quantity: 500000 },
  { id: 12, quantity: 1000000 },
];

export { data, pyramid };
