import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    youAreMillionaire: boolean
}

const initialState: InitialState = {
    youAreMillionaire: false
}

const millionaireSLice = createSlice({
    name: 'millionaire',
    initialState,
    reducers: {
        youAreMillionaire(state, {payload}){
            state.youAreMillionaire = payload
        }
    }
})

export const {youAreMillionaire} = millionaireSLice.actions
export default millionaireSLice.reducer