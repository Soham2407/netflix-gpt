import { createSlice } from "@reduxjs/toolkit";

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },

    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userAuthSlice.actions;

export default userAuthSlice.reducer;
