import { Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Cards from "../../Card/Card";
import styles from "./homepage.module.css";

export default function Index() {
  const posts = useSelector((state: RootState) =>
    state.getUser.posts.slice(0, 20)
  );

  return (
    <div className="site-card-wrapper">
      <Row className={`${styles.row}`}>
        {posts.map((item, index) => {
          return <Cards item={item} key={index} />;
        })}
      </Row>
    </div>
  );
}
