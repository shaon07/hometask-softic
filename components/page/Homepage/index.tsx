import { Row } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Cards from "../../Card/Card";
import styles from "./homepage.module.css";

export default function Index() {
  const [loading, setLoading] = useState<Boolean>(true);
  const posts = useSelector((state: RootState) =>
    state.getUser.posts.slice(0, 20)
  );


  return (
    <div className="site-card-wrapper">
      <Row className={`${styles.row}`}>
        {
        posts.map((item, index) => <Cards item={item} key={index}  />)
        }
      </Row>
    </div>
  );
}
