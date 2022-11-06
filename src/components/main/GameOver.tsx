import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../app/hooks/hooks'
import { setGameOver } from '../../features/gameOverSlice'


const GameOver = () => {
    const dispatch = useDispatch()
const {award} = useAppSelector((state) => state.gameOver)

  return (
    <div>
        <h1>GameOver</h1>
        <h2>Your prize: {award}</h2>
       <button onClick={() => dispatch(setGameOver(false))}>Play Again</button>
    </div>
  )
}

export default GameOver