/* eslint-disable @next/next/no-img-element */
import { Card, Col, Divider, Row } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { authorDetailType, authorType } from '../../types';
import styles from './Detail.module.css';


export default function Index() {

  const router = useRouter();
  const id = Number(router.query.id);
  const [data] = useSelector((state: RootState) => state.getUser.posts.filter(item => item.id === id))
  const comments = useSelector((state: RootState) => state.getUser.comments.filter(item => item.postId === id))
  const [author, setAuthor] = useState<authorType>({} as authorType);
  const [authorDetail, setAuthorDetail] = useState<authorDetailType>({} as authorDetailType);

  useEffect(() => {
    if (data) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${data.id}`)
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
  }, [data]);

  useEffect(() => {
    if (data) {
      fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`)
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
  }, [data]);

  return (
    <Col>
      <Row>
        <div className={`${styles.detailWrapper}`}>
          <Col xs={24} md={24} lg={12}>
            <Card
              className="space-align-block"
              cover={<img src={author.url} alt="card" height={500} />}
            >
              <div className={`${styles.authorInfo}`}>
                <img src={author.url} alt="author" width={30} height={30} />
                <div className={`${styles.authorBody}`}>
                  <h5>{authorDetail.name}</h5>
                  <span>{authorDetail.email}</span>
                </div>
              </div>

              <div className={`${styles.post}`}>
                <h2>{data?.title}</h2>
                <p>{data?.body}</p>
              </div>

              <Divider />
              <div className={`${styles.comments}`}>
                <h4>See all {comments.length} Comments</h4>
                {
                  comments.map((item, index) => {
                    return (
                      <div className={`${styles.commentUser}`} key={index}>
                        <h3>{item.email}</h3>
                        <p>{item.body}</p>
                      </div>
                    )
                  })
                }
              </div>
            </Card>
          </Col>
        </div>
      </Row>
    </Col>
  )
}
