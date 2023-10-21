import styles from "./UserInterface.module.scss";
import SvgGenerator from "../../../instruments/SvgGenerator";

const UserInterface = ({ like }) => {
  return (
    <div className={styles.container}>
      <a href="#!">
        <span className={styles.item__price}>37 280 ₽</span>
        <SvgGenerator name={"cart"} />
        <span className={styles.item__label}>17</span>
      </a>
      <a href="#!">
        <SvgGenerator name="heart" />
        {false ? <span className={styles.item__label}>{0}</span>: ''}
      </a>
      <a href="#!">
        <SvgGenerator name="profile" />
      </a>
    </div>
  );
};

export default UserInterface;
