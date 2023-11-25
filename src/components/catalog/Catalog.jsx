import styles from "./Catalog.module.scss";
import classNames from "classnames";
import { useResize } from "./../../hooks/useResize";

const Catalog = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Каталог</h2>
      <div className={styles.items}>
        <div className={styles.item}>
          <h2 className={classNames(styles.item__title, styles.item__title_1)}>
            Тату наборы
          </h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Держатели</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Тату машинки</h2>
        </div>
        <div className={styles.item}>
          <h2 className={classNames(styles.item__title, styles.item__title_4)}>
            Педали и провода
          </h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Краски</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Блоки питания</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Наконечники</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Тату иглы</h2>
        </div>
        <div className={styles.item}>
          <h2 className={classNames(styles.item__title, styles.item__title_9)}>
            Защита, ёмкости, расходники
          </h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Аксессуары</h2>
        </div>
        <div className={styles.item}>
          <h2 className={styles.item__title}>Принтеры и планшеты</h2>
        </div>
      </div>
      { useResize() > 768 ? (
        ""
      ) : (
        <button className={styles.button}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="275"
            height="70"
            viewBox="0 0 275 70"
            fill="none"
          >
            <path
              d="M16 17.5V1H259V17.5V26.25V26.8244L259.496 27.1138L273.015 35L259.496 42.8862L259 43.1756V43.75V52.5V69H16V52.5V43.75V43.1756L15.5039 42.8862L1.98463 35L15.5039 27.1138L16 26.8244V26.25V17.5Z"
              fill="#EEEEEE"
              stroke="#BB8C5F"
              strokeWidth="2"
            />
            <text
              textAnchor="middle"
              x="138"
              y="42"
              style={{ fontSize: "20px" }}
            >
              Смотреть каталог
            </text>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Catalog;
