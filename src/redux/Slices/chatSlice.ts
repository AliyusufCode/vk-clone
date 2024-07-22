import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      text: "Приветствую",
      time: "16:24",
      isMyMessage: false,
    },
    {
      text: "Я эхо собеседник",
      time: "16:25",
      isMyMessage: false,
    },
    {
      text: "Напиши мне любое сообщение))",
      time: "16:26",
      isMyMessage: false,
    },
    {
      text: "Да, уже печатаю...",
      time: "18:18",
      isMyMessage: true,
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
