/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Homepage from '../components/page/Homepage';
import { comments, post } from "../redux/userSlice";
import { commentType, postType } from "../types";

type propsType = {
  posts: postType;
  comment: commentType;
  error: boolean
};

export default function Home({ posts, comment, error }: propsType) {

  const dispatch = useDispatch();
  if (error) {
    return <h1>Error While Fetching Data</h1>
  }

  useEffect(() => {
    dispatch(post(posts));
    dispatch(comments(comment));

  }, [comment, posts, error, dispatch]);

  return <Homepage />
}


export const getServerSideProps = async () => {
  let error;
  try {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts");
    const comments = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const postData = await post.json();
    const commentData = await comments.json();

    if (!post.ok || !comments.ok) {
      error = true
    } else {
      error = false
    }

    return {
      props: {
        posts: postData,
        comment: commentData,
        error
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error
      }
    }
  }
};
