import { createSlice } from "@reduxjs/toolkit";

export type Comment = {
  postId: number;
  id: number;
  img: string;
  user: string;
  comment: string;
  createdAt: any;
  countLiked: number;
};

export type CommentState = {
  comments: Comment[];
};

const initialState: CommentState = {
  comments: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addComment(state, action) {
      const newComments: Comment[] = action.payload;

      newComments.forEach((newComment) => {
        const exists = state.comments.some(
          (comment) => comment.id === newComment.id
        );

        if (!exists) {
          state.comments.push(newComment);
        }
      });
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
