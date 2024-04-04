import { createSlice } from "@reduxjs/toolkit";

interface initialStateUserName {
  userName: string;
}

const initialState: initialStateUserName = {
  userName: "",
};

const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    enterUserName(state, { payload }) {
      state.userName = payload;
    },
  },
});

export const { enterUserName } = userNameSlice.actions;
export default userNameSlice.reducer;
