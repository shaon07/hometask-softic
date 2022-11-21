import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "../components/page/Homepage";
import { RootState } from "../redux/store";
import { comments, post } from "../redux/userSlice";
import { commentType, postType } from "../types";

type propsType = {
  posts: postType;
  comment: commentType;
};
export default function Home({ posts, comment }: propsType) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(post(posts));
    dispatch(comments(comment));
  }, []);

  const data = useSelector((state: RootState) => state.getUser);

  console.log(data);
  return <HomePage />;
}
export const getServerSideProps = async () => {
  try {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    const comments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const postData = await post.json();
    const commentData = await comments.json();

    return {
      props: {
        posts: postData,
        comment: commentData,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
