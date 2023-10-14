import Contacts from "../contacts/Contacts";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__menu}>
        <div className={styles.logo}>
          <Logo />
          <a className={styles.link} href="#!">
            Политика конфенедциальности
          </a>
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#!">Промокоды</a>
          </li>
          <li>
            <a href="#!">Скидки</a>
          </li>
          <li>
            <a href="#!">Помощь</a>
          </li>
          <li>
            <a href="#!">О нас</a>
          </li>
          <li>
            <a href="#!">Контакты</a>
          </li>
        </ul>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="400"
        viewBox="0 0 6 400"
        fill="none"
      >
        <path
          d="M2.50002 395L0.113266 400L5.88677 400L3.50002 395L2.50002 395ZM3.49998 5L5.88673 -1.26184e-07L0.113225 1.26184e-07L2.49998 5L3.49998 5ZM3.50002 395.5L3.49998 4.5L2.49998 4.5L2.50002 395.5L3.50002 395.5Z"
          fill="#524336"
        />
      </svg>
      <Contacts />
    </footer>
  );
};

export default Footer;
