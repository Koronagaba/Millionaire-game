import { useEffect } from 'react'

import { useAppSelector } from '../../../hooks/hooks'
import './Header.css'

const Header = () => {
  const {award } = useAppSelector(state => state.gameOver)

  return (
    <div className='header'>
        <p>Millionaire</p>
        <p>Best Score: {localStorage.getItem("score")}</p>
    </div>
  )
}

export default Header