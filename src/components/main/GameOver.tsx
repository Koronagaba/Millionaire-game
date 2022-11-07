import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks/hooks'
import { setGameOver } from '../../features/gameOverSlice'
import { setQuestionNumber } from '../../features/questionsSlice'


const GameOver = () => {
    const dispatch = useDispatch()
const {award} = useAppSelector((state) => state.gameOver)

const onPlayAgain = () => {
  dispatch(setGameOver(false))
  dispatch(setQuestionNumber(1))
}

  return (
    <div>
        <h1>GameOver</h1>
        <h2>Your prize: {award}</h2>
       <button onClick={onPlayAgain}>Play Again</button>
    </div>
  )
}

export default GameOver