import { Routes, Route } from 'react-router-dom';

import { StartScreen } from './pages/StartScreen/StartScreen';
import { CreateQuiz } from './pages/CreateQuiz';
import { ChooseQuiz } from './pages/ChooseQuiz';
import { QuizGame } from './pages/QuizGame';
import NotFoundpage from './NotFoundpage';

export function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/choose" element={<ChooseQuiz />} />
          <Route path="/game" element={<QuizGame />} />
          <Route path="*" element={<NotFoundpage />} />
        </Routes>
      </div>
    </>
  );
}
