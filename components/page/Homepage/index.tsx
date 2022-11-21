import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BiTrash } from "react-icons/bi";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import useComponentVisible from "../../../hooks/useOutSideClick";
import styles from "./homepage.module.css";

type showType = boolean;

export default function Index() {
  const { Meta } = Card;
  const {
    ref,
    isComponentVisible: show,
    setIsComponentVisible: setShow,
  } = useComponentVisible(true);

  return (
    <div className="site-card-wrapper">
      <Row className={`${styles.row}`}>
        <Col span={6} className={`${styles.card}`}>
          <Card
            hoverable
            className={`${styles.card}`}
            cover={
              <Image
                src={`https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png`}
                alt="card"
                width={90}
                height={300}
              />
            }
          >
            <Meta
              title="Europe Street beat"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad blanditiis minus natus ea autem labore pariatur modi alias porro id?"
            />

            <div className={`${styles.authorBox}`}>
              <div className={`${styles.author}`}>
                <Image
                  className={`${styles.authorImage}`}
                  src="/author.jpg"
                  alt="author"
                  width={30}
                  height={30}
                />
                <span>SHaon</span>
              </div>

              <div>
                <Button type="primary" className={`${styles.btnBox}`}>
                  <BiTrash />
                  Delete
                </Button>
              </div>
            </div>

            <div
              className={`${styles.showComment}`}
              onClick={() => setShow(true)}
            >
              <p>View comments</p>
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
                    <span>Wow very nice</span>
                    <span>Wow very nice</span>
                    <span>Wow very nice</span>
                  </div>

                  <div className={`${styles.viewBtn}`}>
                    <Link href="#" legacyBehavior>
                      <a>View All</a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
