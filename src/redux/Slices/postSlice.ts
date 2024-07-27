import { createSlice } from "@reduxjs/toolkit";

export type Comment = {
  user: string;
  img: string;
  id: number;
  comment: string;
  createdAt: string;
  countLiked: number;
};
export type PostsProps = {
  postId: number;
  post: {
    publishedImage: string;
    publishedName: string;
    timePublished: string;
    body?: string;
    groupId: number;
    image: string;
    likes: number;
    commentsCount: number;
    redirected: number;
    views: number;
    id?: number;
    comments?: Comment[];
  };
};
const initialState: PostsProps = {
  postId: -1,
  post: {
    publishedImage: "",
    publishedName: "",
    timePublished: "",
    groupId: 0,
    image: "",
    likes: 0,
    commentsCount: 0,
    redirected: 0,
    views: 0,
  },
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostCommentsId(state, action) {
      state.postId = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
  },
});

export const { setPostCommentsId, setPost } = postSlice.actions;

export default postSlice.reducer;
