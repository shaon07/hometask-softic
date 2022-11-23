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
  loading: boolean;
}

export type authorDetailType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}
