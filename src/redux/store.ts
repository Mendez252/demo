import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./userSlice";

export interface RootState {
  usersStore: ReturnType<typeof usersSlice>;
}

export const store = configureStore({
  reducer: {
    usersStore: usersSlice,
  },
});
