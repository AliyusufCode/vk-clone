import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: -1,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostCommentsId(state, action) {
      state.postId = action.payload;
    },
  },
});

export const { setPostCommentsId } = postSlice.actions;

export default postSlice.reducer;
