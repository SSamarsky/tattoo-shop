import BottomLine from "../ui/bottomLine/BottomLine";
import styles from "./Banners.module.scss";
import classNames from "classnames";

const Banners = () => {
  return (
    <div className={styles.banners}>
      <div className={classNames(styles.banner, styles.left)}>
        <h2 className={classNames(styles.title, styles.title_left)}>
          Краски Lip Nitn
        </h2>
        <div className={classNames(styles.button, styles.button_left)}>
          <p className={styles.link}>Смотреть в каталоге</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="6"
            viewBox="0 0 179 6"
            fill="none"
          >
            <path
              d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM178.887 2.99998L176 0.113233L173.113 2.99999L176 5.88674L178.887 2.99998ZM3 3.5L176 3.49998L176 2.49998L3 2.5L3 3.5Z"
              fill="#BB8C5F"
            />
          </svg>
        </div>
      </div>
      <div className={classNames(styles.banner, styles.right)}>
        <h2 className={classNames(styles.title, styles.title_right)}>
          Foxx viper — хит 2021 года
        </h2>
        <div className={classNames(styles.button, styles.button_right)}>
          <p className={styles.link}>Смотреть в каталоге</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="179"
            height="6"
            viewBox="0 0 179 6"
            fill="none"
          >
            <path
              d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM178.887 2.99998L176 0.113233L173.113 2.99999L176 5.88674L178.887 2.99998ZM3 3.5L176 3.49998L176 2.49998L3 2.5L3 3.5Z"
              fill="#BB8C5F"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banners;
