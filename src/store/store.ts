import { configureStore } from "@reduxjs/toolkit";

// SLices
import userSlice from "../slices/user.slice.ts";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
