import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../types";

const initialState: userType = {
  posts: [],
  comments: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    post: (state, action) => {
      state.posts = action.payload;
    },
    comments: (state, action) => {
      state.comments = action.payload;
    },
    deletePost: (state, action) => {
      state.posts = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { post, comments, deletePost, } = userSlice.actions;

export default userSlice.reducer;
