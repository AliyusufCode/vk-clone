import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./Slices/chatSlice";
import musicSlice from "./Slices/musicSlice";
import postSlice from "./Slices/postSlice";
export const store = configureStore({
  reducer: { chat: chatSlice, music: musicSlice, post: postSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
