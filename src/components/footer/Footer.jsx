import Contacts from "../contacts/Contacts";
import Logo from "../logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
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
              <a href="#!">О нас</a>
            </li>
            <li>
              <a href="#!">Скидки</a>
            </li>
            <li>
              <a href="#!">Контакты</a>
            </li>
            <li>
              <a href="#!">Помощь</a>
            </li>
          </ul>
        </div>
        <svg
          className={styles.line}
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
        <svg className={styles.line__hor}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="6"
          viewBox="0 0 1216 6"
          fill="none"
        >
          <path
            d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1211 3.5L1216 5.88675V0.113249L1211 2.5V3.5ZM4.5 3.5H1211.5V2.5H4.5V3.5Z"
            fill="#524336"
          />
        </svg>
        <div className={styles.contacts}>
          <Contacts />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
