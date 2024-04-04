import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isMobile: boolean;
}

const initialState: InitialState = {
  isMobile: false,
};

const responsiveSlice = createSlice({
  name: "responsive",
  initialState,
  reducers: {
    setIsMobileFalse(state) {
      state.isMobile = false;
    },
    setIsMobileTrue(state) {
      state.isMobile = true;
    },
  },
});

export const { setIsMobileFalse, setIsMobileTrue } = responsiveSlice.actions;
export default responsiveSlice.reducer;
