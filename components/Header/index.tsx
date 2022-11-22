import { Col, Row, Typography } from "antd";
import Link from 'next/link';
import styles from "./index.module.css";

export default function Index() {
  const { Title } = Typography;
  return (
    <Col className={`${styles.HeaderWrapper}`}>
      <Row>
        <Col span={6}>
          <Link href='/'>
            <Title level={3} className={`${styles.Brand}`}>
              HOMETASK
            </Title>
          </Link>
        </Col>
        <Col span={18}>user Name</Col>
      </Row>
    </Col>
  );
}
