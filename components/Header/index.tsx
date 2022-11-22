import { Col, Row, Typography } from "antd";
import Link from 'next/link';
import styles from "./index.module.css";

export default function Index() {
  const { Title } = Typography;
  return (
    <Col className={`${styles.HeaderWrapper}`}>
      <Row>
        <Col xs={24} md={6}>
          <Link href='/'>
            <Title level={3} className={`${styles.Brand}`}>
              HOMETASK
            </Title>
          </Link>
        </Col>
        <Col xs={24} md={18}>
          <Col>
            <Title level={5} className={`${styles.Brand}`} style={{ textAlign: "end" }}> FROM MD SHAMIRUL ISLAM | ALISHAON078@GMAIL.COM</Title>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}
