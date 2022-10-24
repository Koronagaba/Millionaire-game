import { Pyramid, SingleData } from "../types/types";

const easyData: SingleData[] = [
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
  {
    id: 6,
    question: "Sixth quest?",
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
        isCorrect: true,
      },
      {
        answer: "fourth",
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    question: "Seventh quest?",
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
    id: 8,
    question: "Eighth quest?",
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
        isCorrect: true,
      },
      {
        answer: "fourth",
        isCorrect: false,
      },
    ],
  },
  {
    id: 9,
    question: "Nineth quest?",
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
    id: 10,
    question: "10th quest?",
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
//// medium 
const mediumData: SingleData[] = [
  {
      id: 11,
      question: "mWhats your name?",
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
      id: 12,
      question: "mSecond Question",
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
      id: 13,
      question: "mThird quest?",
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
      id: 14,
      question: "mFourth quest?",
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
      id: 15,
      question: "mFifth quest?",
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
      id: 16,
      question: "mSixth quest?",
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
          isCorrect: true,
        },
        {
          answer: "fourth",
          isCorrect: false,
        },
      ],
    },
    {
      id: 17,
      question: "mSeventh quest?",
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
      id: 18,
      question: "mEighth quest?",
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
          isCorrect: true,
        },
        {
          answer: "fourth",
          isCorrect: false,
        },
      ],
    },
    {
      id: 19,
      question: "mNineth quest?",
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
      id: 20,
      question: "m10th quest?",
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
  ////// quite difficult
  const quiteDifficultData: SingleData[] = [
    {
        id: 21,
        question: "qWhats your name?",
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
        id: 22,
        question: "qSecond Question",
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
        id: 23,
        question: "qThird quest?",
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
        id: 24,
        question: "qFourth quest?",
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
        id: 25,
        question: "qFifth quest?",
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
        id: 26,
        question: "qSixth quest?",
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
            isCorrect: true,
          },
          {
            answer: "fourth",
            isCorrect: false,
          },
        ],
      },
      {
        id: 27,
        question: "qSeventh quest?",
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
        id: 28,
        question: "qEighth quest?",
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
            isCorrect: true,
          },
          {
            answer: "fourth",
            isCorrect: false,
          },
        ],
      },
      {
        id: 29,
        question: "qNineth quest?",
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
        id: 30,
        question: "q10th quest?",
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

    /////// Difficult
    const difficultData: SingleData[] = [
      {
          id: 31,
          question: "dWhats your name?",
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
          id: 32,
          question: "dSecond Question",
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
          id: 33,
          question: "dThird quest?",
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
          id: 34,
          question: "dFourth quest?",
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
          id: 35,
          question: "dFifth quest?",
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
          id: 36,
          question: "dSixth quest?",
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
              isCorrect: true,
            },
            {
              answer: "fourth",
              isCorrect: false,
            },
          ],
        },
        {
          id: 37,
          question: "dSeventh quest?",
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
          id: 38,
          question: "dEighth quest?",
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
              isCorrect: true,
            },
            {
              answer: "fourth",
              isCorrect: false,
            },
          ],
        },
        {
          id: 39,
          question: "dNineth quest?",
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
          id: 40,
          question: "d10th quest?",
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

export { easyData, mediumData, quiteDifficultData, difficultData, pyramid };
