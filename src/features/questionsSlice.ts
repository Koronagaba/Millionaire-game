import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    questionNumber: 1
}


const questionsSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
    nextQuestion(state) {
      state.questionNumber = state.questionNumber +1
    }
  }  
})

export const {nextQuestion} = questionsSlice.actions
export default questionsSlice.reducer