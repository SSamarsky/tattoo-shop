import styles from "./Catalog.module.scss";
import classNames from "classnames";

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
    </div>
  );
};

export default Catalog;
