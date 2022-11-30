import { useEffect } from 'react'

import { useAppSelector } from '../../../hooks/hooks'
import './Header.css'

const Header = () => {
  const {award } = useAppSelector(state => state.gameOver)

  useEffect(() => {
    const localScore = localStorage.getItem("score") ?? "0";
    const localScoreAsNumber = parseInt(localScore);
    if (award > localScoreAsNumber) {
      localStorage.setItem("score", award.toString());
    }
  }, [award]);

  return (
    <div className='header'>
        <p>Millionaire</p>
        <p>Best Score: {localStorage.getItem("score")}</p>
    </div>
  )
}

export default Header