import { createSlice } from "@reduxjs/toolkit";

const initialState: User[] = [{ name: "Carlos", token: "asdasda" }];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersList: (state) => {
      state.map((user) => user);
    },
  },
});

export const { usersList } = usersSlice.actions;
export default usersSlice.reducer;

//===========TYPES===============
interface User {
  name: string;
  token: string;
}
