/* eslint-disable @next/next/no-img-element */
import { Button, Card, Col } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useComponentVisible from "../../hooks/useOutSideClick";
import { RootState } from "../../redux/store";
import { deletePost } from "../../redux/userSlice";
import { authorDetailType, authorType, postType } from "../../types";
import styles from "./Card.module.css";

type CardType = {
  item: postType;
};

export default function Cards({ item }: CardType) {
  const {
    ref,
    isComponentVisible: show,
    setIsComponentVisible: setShow,
  } = useComponentVisible(false);
  const dispatch = useDispatch();

  const comments = useSelector((state: RootState) =>
    state.getUser.comments.filter((comment) => comment.postId === item.id)
  );
  const posts = useSelector((state: RootState) => state.getUser.posts);

  const [author, setAuthor] = useState<authorType>({} as authorType);
  const [authorDetail, setAuthorDetail] = useState<authorDetailType>(
    {} as authorDetailType
  );

  const handleDelete = () => {
    const newPost = posts.filter((post) => post.id !== item.id);
    dispatch(deletePost(newPost));
  };

  useEffect(() => {
    if (item) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${item.userId}`)
        .then((res) => {
          if (!res.ok) {
            console.log("error to fetching");
          } else {
            return res.json();
          }
        })
        .then((res) => {
          setAuthor(res);
        });
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      fetch(`https://jsonplaceholder.typicode.com/users/${item.userId}`)
        .then((res) => {
          if (!res.ok) {
            console.log("error to fetching");
          } else {
            return res.json();
          }
        })
        .then((res) => {
          setAuthorDetail(res);
        });
    }
  }, [item]);

  return (
    <Col xs={24} sm={12} md={8} lg={6} className={`${styles.card}`}>
      <Col className={`${styles.cardWrapper}`}>
        <Card
          hoverable
          className={`${styles.cards}`}
          cover={<img src={author.url} alt="card" loading="lazy" />}
        >
          <div className={`${styles.cardHeading}`}>
            <Link href={`/detail?id=${item.id}`}>
              <h4 className={`${styles.heading}`}>{item.title}</h4>
            </Link>
            <p className={`${styles.description}`}>{item.body.slice(0, 150)}</p>
          </div>

          <div className={`${styles.authorBox}`}>
            <div className={`${styles.author}`}>
              <img
                className={`${styles.authorImage}`}
                src={author.url}
                alt="author"
                width={30}
                height={30}
              />
              <span>{authorDetail?.name}</span>
            </div>

            <div>
              <Button
                type="primary"
                className={`${styles.btnBox}`}
                onClick={handleDelete}
              >
                <BiTrash />
                Delete
              </Button>
            </div>
          </div>

          <div
            className={`${styles.showComment}`}
            onClick={() => setShow(true)}
          >
            <p>View {comments.length} comments</p>
            <FaChevronRight />
          </div>

          {show && (
            <div className={`${styles.commentBoxWrapper}`} ref={ref}>
              <div className={`${styles.commentHeading}`}>
                <h5>Comments</h5>
                <FaChevronDown onClick={() => setShow(false)} />
              </div>
              <div className={`${styles.commentBox}`}>
                <div className={`${styles.comment}`}>
                  {comments.slice(0, 3).map((item, index) => {
                    return <span key={index}>{item.body}</span>;
                  })}
                </div>

                <div className={`${styles.viewBtn}`}>
                  <Link href={`/detail?id=${item.id}`} legacyBehavior>
                    <a>View All</a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Card>
      </Col>
    </Col>
  );
}
