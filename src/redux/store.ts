import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./Slices/chatSlice";
import musicSlice from "./Slices/musicSlice";
import postSlice from "./Slices/postSlice";
import commentSlice from "./Slices/commentSlice";
export const store = configureStore({
  reducer: {
    chat: chatSlice,
    music: musicSlice,
    post: postSlice,
    comment: commentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
