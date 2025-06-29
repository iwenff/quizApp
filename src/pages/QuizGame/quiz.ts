interface QuizTypes {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export const quizGame: QuizTypes[] = [
  {
    id: 1,
    question: 'Сколько будет 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'Столица Франции?',
    options: ['Берлин', 'Мадрид', 'Париж', 'Рим'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Какой цвет получается при смешивании синего и желтого?',
    options: ['Фиолетовый', 'Оранжевый', 'Зеленый', 'Красный'],
    correctIndex: 2,
  },
  {
    id: 4,
    question: 'Сколько дней в високосном году?',
    options: ['365', '366', '364', '367'],
    correctIndex: 1,
  },
  {
    id: 5,
    question: 'Как называется самая большая планета Солнечной системы?',
    options: ['Марс', 'Сатурн', 'Юпитер', 'Земля'],
    correctIndex: 2,
  },
  {
    id: 6,
    question: 'Кто написал "Войну и мир"?',
    options: ['Достоевский', 'Толстой', 'Пушкин', 'Чехов'],
    correctIndex: 1,
  },
  {
    id: 7,
    question: 'Сколько сторон у шестиугольника?',
    options: ['5', '6', '7', '8'],
    correctIndex: 1,
  },
  {
    id: 8,
    question: 'Какой элемент обозначается символом "O"?',
    options: ['Золото', 'Кислород', 'Олово', 'Углерод'],
    correctIndex: 1,
  },
  {
    id: 9,
    question: 'Кто был первым человеком в космосе?',
    options: ['Нил Армстронг', 'Юрий Гагарин', 'Алексей Леонов', 'Базз Олдрин'],
    correctIndex: 1,
  },
  {
    id: 10,
    question: 'Сколько будет 9 x 7?',
    options: ['63', '56', '72', '49'],
    correctIndex: 0,
  },
  {
    id: 11,
    question: 'Как называется процесс превращения воды в пар?',
    options: ['Конденсация', 'Испарение', 'Плавление', 'Сублимация'],
    correctIndex: 1,
  },
  {
    id: 12,
    question: 'Какое море самое солёное в мире?',
    options: ['Красное море', 'Средиземное море', 'Мёртвое море', 'Чёрное море'],
    correctIndex: 2,
  },
  {
    id: 13,
    question: 'В какой стране находятся пирамиды Гизы?',
    options: ['Ирак', 'Мексика', 'Греция', 'Египет'],
    correctIndex: 3,
  },
];
