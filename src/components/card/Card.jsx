import styles from "./Card.module.scss";
import classNames from "classnames";
import StatusLabel from "../ui/statusLabel/StatusLabel";
import Heart from "../ui/icons/heart/Heart";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${data.imgUrl})` }}
      >
        <div className={styles.card__top}>
          <StatusLabel status={"new"} text={"Новинка"} />
          <Heart />
        </div>
      </div>
      <div className={styles.checkboxes}>
        <div
          className={classNames(styles.checkbox, styles.checkbox_active)}
        ></div>
        <div className={styles.checkbox}></div>
        <div className={styles.checkbox}></div>
        <div className={styles.checkbox}></div>
      </div>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.price}>{data.price}</p>
    </div>
  );
};

export default Card;
