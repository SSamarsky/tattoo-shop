import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.list__item}>
          <a href="#!">Промокоды</a>
        </li>
        <li className={styles.list__item}>
          <a href="#!">Скидки</a>
        </li>
        <li className={styles.list__item}>
          <a href="#!">Помощь</a>
        </li>
        <li className={styles.list__item}>
          <a href="#!">О нас</a>
        </li>
        <li className={styles.list__item}>
          <a href="#!">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
