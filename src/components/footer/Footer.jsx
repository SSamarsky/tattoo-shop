import Contacts from "../contacts/Contacts";
import styles from "./Footer.module.scss";
import { useResize } from "./../../hooks/useResize";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footer__menu}>
          <div className={styles.logo_wrap}>
            <div className={styles.logo}>
              <h2 className={styles.logo__title}>MR. DRISKELL</h2>
              {useResize() > 768 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="6"
                  viewBox="0 0 192 6"
                  fill="none"
                >
                  <path
                    d="M0.113249 3.00002L3 5.88677L5.88675 3.00002L3 0.113264L0.113249 3.00002ZM191.887 3L189 0.113248L186.113 3L189 5.88675L191.887 3ZM3 3.50002L189 3.5L189 2.5L3 2.50002L3 3.50002Z"
                    fill="#BB8C5F"
                  />
                </svg>
              ) : (
                <svg
                  width="276"
                  height="9"
                  viewBox="0 0 276 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.871635 4.77441L5 8.90278L9.12836 4.77441L5 0.646049L0.871635 4.77441ZM275.128 4.77439L271 0.646026L266.872 4.77439L271 8.90276L275.128 4.77439ZM5 5.48947L271 5.48944L271 4.05934L5 4.05936L5 5.48947Z"
                    fill="#BB8C5F"
                  />
                </svg>
              )}

              <h3 className={styles.logo__subtitle}>Tattoo shop</h3>
            </div>
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
        <svg
          className={styles.line__hor}
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
