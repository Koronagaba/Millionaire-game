import { Pyramid, SingleData } from "../types/types";

const easyData: SingleData[] = [
  {
    id: 1,
    question: "który miesiąc ma 28 dni?",
    answers: [
      { id: 1, answer: "styczeń", isCorrect: false},
      { id: 2, answer: "luty", isCorrect: true },
      { id: 3, answer: "luty w roku przestępnym", isCorrect: false },
      { id: 4, answer: "marzec", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Poprawny zapis to:",
    answers: [
      { id: 1, answer: "dokąd kolwiek", isCorrect: false },
      { id: 2, answer: "dokontkolwiek", isCorrect: false },
      { id: 3, answer: "dokond kolwiek", isCorrect: false },
      { id: 4, answer: "dokądkolwiek", isCorrect: true },
    ],
  },
  {
    id: 3,
    question: "Czy delfin jest rybą?",
    answers: [
      { id: 1, answer: "Tak", isCorrect: false },
      { id: 2, answer: "Być może", isCorrect: false },
      { id: 3, answer: "Nie", isCorrect: true },
      { id: 4, answer: "Lama?", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Jaki kolor ma skóra niedźwiedzia polarnego?",
    answers: [
      { id: 1, answer: "zielony", isCorrect: false },
      { id: 2, answer: "różowy", isCorrect: false },
      { id: 3, answer: "biały", isCorrect: false },
      { id: 4, answer: "czarny", isCorrect: true },
    ],
  },
  {
    id: 5,
    question: "Prezydent z dupą na brodzie to:",
    answers: [
      { id: 1, answer: "Anrdzej Duda", isCorrect: true },
      { id: 2, answer: "Bronisław Komorowski", isCorrect: false },
      { id: 3, answer: "Lech Wałęsa", isCorrect: false },
      { id: 4, answer: "Aleksander Kwaśniewski", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Proteiny to inna nazwa:",
    answers: [
      { id: 1, answer: "witamin", isCorrect: false },
      { id: 2, answer: "węglowodanów", isCorrect: false },
      { id: 3, answer: "białek", isCorrect: true },
      { id: 4, answer: "tłuszczów", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Przesłodka pavlova nie obejdzie się bez...?",
    answers: [
      { id: 1, answer: "kompotierki", isCorrect: false },
      { id: 2, answer: "Pavla", isCorrect: false },
      { id: 3, answer: "bzów", isCorrect: false },
      { id: 4, answer: "bez", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "Jajko z zerem na początku kodu pochodzi od kury z chowu?",
    answers: [
      { id: 1, answer: "klatkowego", isCorrect: false },
      { id: 2, answer: "ściółkowego", isCorrect: false },
      { id: 3, answer: "ekologicznego", isCorrect: true },
      { id: 4, answer: "na wolnym wybiegu", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "W systemie binarnym do zapisu liczb potrzebne są tylko:",
    answers: [
      { id: 1, answer: "cyfry 0 i 1", isCorrect: true },
      { id: 2, answer: "litery X i Y", isCorrect: false },
      { id: 3, answer: "kropki i kreski", isCorrect: false },
      { id: 4, answer: "kwadraty i kółka", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "W którym roku zakończyła się pierwsza wojna światowa?",
    answers: [
      { id: 1, answer: "1918", isCorrect: true },
      { id: 2, answer: "1919", isCorrect: false },
      { id: 3, answer: "1928", isCorrect: false },
      { id: 4, answer: "1939", isCorrect: false },
    ],
  },
];
//// medium
const mediumData: SingleData[] = [
  {
    id: 11,
    question: "2 + 2 x 2 =",
    answers: [
      { id: 1, answer: "Wiktor", isCorrect: false },
      { id: 3, answer: "Leon", isCorrect: true },
      { id: 2, answer: "Michał", isCorrect: false },
      { id: 4, answer: "Walenty", isCorrect: false },
    ],
  },
  {
    id: 12,
    question: "Który z tych krajów ma największą powierzchnię?",
    answers: [
      { id: 1, answer: "Madagaskar", isCorrect: false },
      { id: 2, answer: "Indonezja", isCorrect: true },
      { id: 3, answer: "Egipt", isCorrect: false },
      { id: 4, answer: "Kolumbia", isCorrect: false },
    ],
  },
  {
    id: 13,
    question: "Pacyfik to inna nazwa Oceanu...",
    answers: [
      { id: 1, answer: "Spokojnego", isCorrect: true },
      { id: 2, answer: "Arktycznego", isCorrect: false },
      { id: 3, answer: "Atlantyckiego", isCorrect: false },
      { id: 4, answer: "Indyjskiego", isCorrect: false },
    ],
  },
  {
    id: 14,
    question: "Jaką wielkość fizyczną mierzymy w paskalach??",
    answers: [
      { id: 1, answer: "siłę", isCorrect: false },
      { id: 2, answer: "ciepło", isCorrect: false },
      { id: 3, answer: "przyspieszenie", isCorrect: false },
      { id: 4, answer: "ciśnienie", isCorrect: true },
    ],
  },
  {
    id: 15,
    question: "Ile serc ma ośmiornica? ",
    answers: [
      { id: 1, answer: "3", isCorrect: true },
      { id: 2, answer: "4", isCorrect: false },
      { id: 3, answer: "5", isCorrect: false },
      { id: 4, answer: "6", isCorrect: false },
    ],
  },
  {
    id: 16,
    question: "Jakiego koloru jest Neptun?",
    answers: [
      { id: 1, answer: "szary", isCorrect: false },
      { id: 2, answer: "fioletowy", isCorrect: false },
      { id: 3, answer: "niebieski", isCorrect: true },
      { id: 4, answer: "czerwony", isCorrect: false },
    ],
  },
  {
    id: 17,
    question: "Który z tych słynnych kompozytorów był głuchy?",
    answers: [
      { id: 1, answer: "Handel", isCorrect: false },
      { id: 2, answer: "Bach ", isCorrect: false },
      { id: 3, answer: "Mozart ", isCorrect: false },
      { id: 4, answer: "Beethoven ", isCorrect: true },
    ],
  },
  {
    id: 18,
    question: "Łzy jakiego zwierzęcia są jedynym znanym antidotum na jad bazyliszka?",
    answers: [
      { id: 1, answer: "Demiguise", isCorrect: false },
      { id: 2, answer: "Hipogryf ", isCorrect: false },
      { id: 3, answer: "Feniks ", isCorrect: true },
      { id: 4, answer: "Billywig ", isCorrect: false },
    ],
  },
  {
    id: 19,
    question: "Ilu zawodników hokeja na lodzie z jednej drużyny może jednocześnie przebywać na lodowisku?",
    answers: [
      { id: 1, answer: "Nie więcej niż sześciu", isCorrect: true },
      { id: 2, answer: "Od ośmiu do dziewięciu", isCorrect: false },
      { id: 3, answer: "Ośmiu", isCorrect: false },
      { id: 4, answer: "Dwunastu", isCorrect: false },
    ],
  },
  {
    id: 20,
    question: "Ilu skoczków narciarskich reprezentuje dany kraj podczas konkursu drużynowego",
    answers: [
      { id: 1, answer: "Trzech", isCorrect: false },
      { id: 2, answer: "Czterech", isCorrect: true },
      { id: 3, answer: "Pięciu", isCorrect: false },
      { id: 4, answer: "Sześciu", isCorrect: false },
    ],
  },
];
////// quite difficult
const quiteDifficultData: SingleData[] = [
  {
    id: 21,
    question: "Co to jest planimetria",
    answers: [
      { id: 1, answer: "Choroba zakaźna", isCorrect: false },
      { id: 2, answer: "Dział geometrii", isCorrect: true },
      { id: 3, answer: "Jednostka medyczna", isCorrect: false },
      { id: 4, answer: "Dział nauk o projektowaniu przestrzeni", isCorrect: false },
    ],
  },
  {
    id: 22,
    question: "Kto napisał ,,Dzieci z Bullerbyn''?",
    answers: [
      { id: 1, answer: "Bracia Grimm", isCorrect: false },
      { id: 2, answer: "Lewis Carroll", isCorrect: false },
      { id: 3, answer: "Karol Dickens", isCorrect: false },
      { id: 4, answer: "Astrid Lindgren", isCorrect: true },
    ],
  },
  {
    id: 23,
    question: "Rodzina Mostowiaków to główni bohaterowie serialu:",
    answers: [
      { id: 1, answer: "M jak miłość", isCorrect: true },
      { id: 2, answer: "Klan", isCorrect: false },
      { id: 3, answer: "Plebania", isCorrect: false },
      { id: 4, answer: "Ranczo", isCorrect: false },
    ],
  },
  {
    id: 24,
    question: "Gdzie obowiązuje ruch lewostronny?",
    answers: [
      { id: 1, answer: "W Stanach zjednoczonych", isCorrect: false },
      { id: 2, answer: "W Turcji, Szwecji i Korei Północnej", isCorrect: false },
      { id: 3, answer: "Na Islandii i na Majorce", isCorrect: false },
      { id: 4, answer: "W Indiach i na Malcie", isCorrect: true },
    ],
  },
  {
    id: 25,
    question: "W którym mieście odbyły się Igrzyska Olimpijskie 2000?",
    answers: [
      { id: 1, answer: "Sydnej", isCorrect: true },
      { id: 2, answer: "Tokio", isCorrect: false },
      { id: 3, answer: "Londyn", isCorrect: false },
      { id: 4, answer: "Moskwa", isCorrect: false },
    ],
  },
  {
    id: 26,
    question: "W którym filmie z 1993 roku, którego akcja toczy się podczas II wojny światowej, występują Liam Neeson i Ralph Fiennes?",
    answers: [
      { id: 1, answer: "Angielski pacjent", isCorrect: false },
      { id: 2, answer: "Pianista ", isCorrect: false },
      { id: 3, answer: "Lista Schindlera ", isCorrect: true },
      { id: 4, answer: "Czytnik", isCorrect: false },
    ],
  },
  {
    id: 27,
    question: "Które zwierzę ma najdłuższy język w stosunku do długości ciała?",
    answers: [
      { id: 1, answer: "Mrówkojad ", isCorrect: false },
      { id: 2, answer: "Niedźwiedź słoneczny ", isCorrect: false },
      { id: 3, answer: "Koliber", isCorrect: false },
      { id: 4, answer: "Kameleon ", isCorrect: true },
    ],
  },
  {
    id: 28,
    question: "W którym oku zginął w zamachu John F. Kennedy?",
    answers: [
      { id: 1, answer: "1959", isCorrect: false },
      { id: 2, answer: "1963", isCorrect: true },
      { id: 3, answer: "1977", isCorrect: false },
      { id: 4, answer: "1989", isCorrect: false },
    ],
  },
  {
    id: 29,
    question: "Kiedy ukazały się pierwsze książki z cyklu ,,Tytus, Romek i A'Tomek''??",
    answers: [
      { id: 1, answer: "W latach 60.", isCorrect: true },
      { id: 2, answer: "W latach 70.", isCorrect: false },
      { id: 3, answer: "W latach 80.", isCorrect: false },
      { id: 4, answer: "W latach 90.", isCorrect: false },
    ],
  },
  {
    id: 30,
    question: "W jakim mieście przez ponad 30 lat żył i pracował Mikołaj Kopernik?",
    answers: [
      { id: 1, answer: "Frombork", isCorrect: true },
      { id: 2, answer: "Elbląg", isCorrect: false },
      { id: 3, answer: "Olsztyn", isCorrect: false },
      { id: 4, answer: "Warszawa", isCorrect: false },
    ],
  },
];

/////// Difficult
const difficultData: SingleData[] = [
  {
    id: 31,
    question: "Walutą jakiego kraju jest Real?",
    answers: [
      { id: 1, answer: "Kolumbii", isCorrect: false },
      { id: 2, answer: "Brazylii", isCorrect: true },
      { id: 3, answer: "Meksyku", isCorrect: false },
      { id: 4, answer: "Argentyny", isCorrect: false },
    ],
  },
  {
    id: 32,
    question: "W którym roku powstała Konstytucja 3 maja?",
    answers: [
      { id: 1, answer: "1939", isCorrect: false },
      { id: 2, answer: "1918", isCorrect: false },
      { id: 3, answer: "1848", isCorrect: false },
      { id: 4, answer: "1791", isCorrect: true },
    ],
  },
  {
    id: 33,
    question: "Korfu to grecka wyspa należąca do archipelagu::",
    answers: [
      { id: 1, answer: "Wyspy Jońskie", isCorrect: true },
      { id: 2, answer: "cyklady", isCorrect: false },
      { id: 3, answer: "Sporady", isCorrect: false },
      { id: 4, answer: "Zakintos", isCorrect: false },
    ],
  },
  {
    id: 34,
    question: "Jak się nazywa stolica Kenii?",
    answers: [
      { id: 1, answer: "Bangau", isCorrect: false },
      { id: 2, answer: "Maputo", isCorrect: false },
      { id: 3, answer: "Logos", isCorrect: false },
      { id: 4, answer: "Nairobi", isCorrect: true },
    ],
  },
  {
    id: 35,
    question: "Który film zdobył Oscara w 2012 roku w kategorii najlepszy film?",
    answers: [
      { id: 1, answer: "Artist", isCorrect: true },
      { id: 2, answer: "The Hurt Locker", isCorrect: false },
      { id: 3, answer: "Argo ", isCorrect: false },
      { id: 4, answer: "Przemówienie Króla", isCorrect: false },
    ],
  },
  {
    id: 36,
    question: "W jakim kraju znajduje się najwyższy wodospad w Europie? ",
    answers: [
      { id: 1, answer: "Islandia ", isCorrect: false },
      { id: 2, answer: "Finlandia ", isCorrect: false },
      { id: 3, answer: "Norwegia", isCorrect: true },
      { id: 4, answer: "Szwecja ", isCorrect: false },
    ],
  },
  {
    id: 37,
    question: "Jakie jest największe miasto na świecie pod względem gęstości zaludnienia?",
    answers: [
      { id: 1, answer: "Pekin ", isCorrect: false },
      { id: 2, answer: "Nowy Jork", isCorrect: false },
      { id: 3, answer: "Bombaj ", isCorrect: false },
      { id: 4, answer: "Manila ", isCorrect: true },
    ],
  },
  {
    id: 38,
    question: "Jakie dwa zwierzęta tworzą herb Australii?",
    answers: [
      { id: 1, answer: "Wombat i Wallaby ", isCorrect: false },
      { id: 2, answer: "Wąż i pająk ", isCorrect: false },
      { id: 3, answer: "Kangaroo i emu", isCorrect: true },
      { id: 4, answer: "fouDragon i dingorth", isCorrect: false },
    ],
  },
  {
    id: 39,
    question: "W którym wieku żył Jan Długosz??",
    answers: [
      { id: 1, answer: "W XV wieku", isCorrect: true },
      { id: 2, answer: "W XIII wieku", isCorrect: false },
      { id: 3, answer: "W XI wieku", isCorrect: false },
      { id: 4, answer: "W XVI wieku", isCorrect: false },
    ],
  },
  {
    id: 40,
    question: "W której części świata leżą Góry Pontyjskie?",
    answers: [
      { id: 1, answer: "W Azji Mniejszej", isCorrect: true },
      { id: 2, answer: "W Pakistanie", isCorrect: false },
      { id: 3, answer: "Na pograniczu Hiszpanii i Portugalii", isCorrect: false },
      { id: 4, answer: "W Pirenejach", isCorrect: false },
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
