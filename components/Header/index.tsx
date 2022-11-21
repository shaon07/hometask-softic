import { Col, Row, Typography } from "antd";
import styles from "./index.module.css";

export default function Index() {
  const { Title } = Typography;
  return (
    <Col className={`${styles.HeaderWrapper}`}>
      <Row>
        <Col span={6}>
          <Title level={3} className={`${styles.Brand}`}>
            HOMETASK
          </Title>
        </Col>
        <Col span={18}>user Name</Col>
      </Row>
    </Col>
  );
}
