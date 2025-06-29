import { Link } from 'react-router-dom';
import './index.scss';
import { Button } from '../../DS';

export const StartScreen = () => {
  return (
    <div className="main-container">
      <Link to="/game" className="start-game">
        <Button>Начать игру</Button>
      </Link>
      <Link to="/create">
        <Button className="create-quiz">Создать свой квиз</Button>
      </Link>
    </div>
  );
};
