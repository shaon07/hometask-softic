/* eslint-disable @next/next/no-img-element */
import { Card, Col, Divider, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
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
  const [showProfile, setShowProfile] = useState<Boolean>(false)

  useEffect(() => {
    if (data) {
      fetch(`https://jsonplaceholder.typicode.com/photos/${data.userId}`)
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
      fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
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

  const handleProfileShow = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.stopPropagation()
    setShowProfile(true)
  }

  return (
    <Col onClick={() => setShowProfile(false)}>
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
                  <h5 onClick={handleProfileShow}>{authorDetail.name} <HiDotsHorizontal /></h5>
                  <span>{authorDetail.email}</span>
                </div>

                {
                  showProfile && <div className={`${styles.authorProfile}`}>
                    <Card
                      className="space-align-block"
                      cover={<img src={author.url} alt="card" height={150} />}
                    >
                      <h4>{authorDetail.name} <span>@{authorDetail.username}</span></h4>
                      <h5>{authorDetail.email}</h5>
                      <a>{authorDetail.phone.replace("x56442", '')}</a>
                      <a>{authorDetail.website}</a>
                      <a>from : {authorDetail.address.city}</a>
                    </Card>
                  </div>
                }
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
