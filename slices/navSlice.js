import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInfo: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDesination: (state, action) => {
      state.desination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});
//push information --> reducers
export const { setOrigin, setDesination, setTravelTimeInformation } =
  navSlice.actions;

//pull information--> selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.desination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
