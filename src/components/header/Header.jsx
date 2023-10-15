import styles from "./Header.module.scss";
import SvgGenerator from "../../instruments/SvgGenerator";
import classNames from "classnames";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__info}>
          <div className={styles.contacts}>
            <div>
              <a
                className={classNames(styles.contact, styles.contact_fix)}
                href="tel:+79525525252"
              >
                <SvgGenerator name={"call"} />
                +7 952 552-52-52
              </a>
              <div className={styles.messengers}>
                <div>Viber</div>
                <div className={styles.messenger_active}>Whats App</div>
                <div>Telegram</div>
              </div>
            </div>
            <a className={styles.contact} href="mailto:mr.driskell@mail.ru">
              <SvgGenerator name={"mail"} />
              Mr.Driskell@mail.ru
            </a>
          </div>

          <Logo />

          <div className={styles.profile}>
            <div className={styles.profile__cart}>
              <span>37 280</span>
              <span>₽</span>
              <SvgGenerator name="cart" />
              <div className={styles.cart__count}>17</div>
            </div>
            <div>
              <SvgGenerator name="heart" />
            </div>
            <div>
              <SvgGenerator name="profile" />
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1216"
          height="6"
          viewBox="0 0 1216 6"
          fill="none"
        >
          <path
            d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM1211 3.5L1216 5.88675V0.113249L1211 2.5V3.5ZM4.5 3.5H1211.5V2.5H4.5V3.5Z"
            fill="#524336"
          />
        </svg>

        <div className={styles.header__menu}>
          <div className={styles.menu__control}>
            <div className={styles.control}>
              <div className={styles.control__title}>Каталог</div>
              <div className={styles.burger}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={styles.search}>
              <input className={styles.search__input} placeholder="Поиск" />
              <span className={styles.search__icon}>
                <SvgGenerator name="search" />
              </span>
            </div>
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>Промокоды</li>
              <li>Скидки</li>
              <li>Помощь</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
