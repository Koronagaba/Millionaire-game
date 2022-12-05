import { createSlice } from "@reduxjs/toolkit";

interface initialStateStartView {
startGame: boolean
}

const initialState: initialStateStartView = {
    startGame: false
}

const startViewSlice = createSlice({
name: 'startView',
initialState,
reducers: {
    startTheGame(state){
        state.startGame = true
    },
    stopTheGame(state){
        state.startGame = false
    }
}
})

export const {startTheGame, stopTheGame} = startViewSlice.actions
export default startViewSlice.reducer