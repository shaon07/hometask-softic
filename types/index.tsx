export type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type commentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type authorType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface userType {
  posts: [postType] | [];

  comments: [commentType] | [];
}
