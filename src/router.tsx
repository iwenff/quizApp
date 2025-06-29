import { Routes, Route } from 'react-router-dom';
import { StartScreen } from './pages/StartScreen';
import { QuizGame } from './pages/QuizGame';
import { CreateQuiz } from './pages/CreateQuiz';
import { ChooseQuiz } from './pages/ChooseQuiz';
const Routing = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<QuizGame />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/choose" element={<ChooseQuiz />} />
        </Routes>
      </div>
    </>
  );
};

export default Routing;
