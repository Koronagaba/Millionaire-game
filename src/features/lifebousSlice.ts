import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TwoIdsWrongAnswersInterface {
  ids: number[];
  questionId?: number;
}

interface LifebousState {
  disableThirtySec: boolean;
  twoIdsWrongAnswers: TwoIdsWrongAnswersInterface;
  twoIdsInTheGame: number[]
}

const initialState: LifebousState = {
  disableThirtySec: false,
  twoIdsWrongAnswers: { ids: [] },
  twoIdsInTheGame: []
};

const lifebousSlice = createSlice({
  name: "lifebous",
  initialState,
  reducers: {
    setDisableThirtySecond(state, { payload }: { payload: boolean }) {
      state.disableThirtySec = payload;
    },
    setTwoIdsWrongAnswers(
      state,
      { payload }: { payload: TwoIdsWrongAnswersInterface }
    ) {
      state.twoIdsWrongAnswers = payload;
    },
    setTwoIdsInTheGame(state, {payload}){
      state.twoIdsInTheGame = payload
    },
    resetTwoIdsInTheGame(state){
      state.twoIdsInTheGame = []
    }
  },
});

export const { setDisableThirtySecond, setTwoIdsWrongAnswers, setTwoIdsInTheGame, resetTwoIdsInTheGame } =
  lifebousSlice.actions;
export default lifebousSlice.reducer;
