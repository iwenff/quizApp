import { Link } from 'react-router-dom';
import { Button } from '../../DS';
import './index.scss';
import { useState } from 'react';
import { quizGame } from './quiz';

export const QuizGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuiz = quizGame[currentIndex];

  const handleAnswer = (index: number) => {
    if (index === currentQuiz.correctIndex) {
      setScore((prev) => prev + 1);
    }
    const nextIndex = currentIndex + 1;

    if (nextIndex < quizGame.length) {
      setCurrentIndex(nextIndex);
    } else {
      setIsFinished(true);
    }
  };
  const handleReset = () => {
    setIsFinished(false);
    setCurrentIndex(0);
  };

  const percentOfCorrectAns = Math.round((currentIndex / quizGame.length) * 100);

  return (
    <div className="container">
      {!isFinished ? (
        <>
          <div className="questions-container">
            <p>{percentOfCorrectAns}%</p>
            <h2>{currentQuiz.question}</h2>
          </div>
          <div className="button-container">
            {currentQuiz.options.map((option, index) => (
              <Button onClick={() => handleAnswer(index)} key={index}>
                {option}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <div style={{ marginLeft: '60px' }}>
          <h1>Поздравляю вы закончили квиз</h1>
          <h2>
            Количество правильных ответов {score} из {quizGame.length}
          </h2>

          <Button onClick={handleReset} style={{ marginRight: '50px' }}>
            Пройти заново
          </Button>

          <Link to="/">
            <Button>Вернуться на главную</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
