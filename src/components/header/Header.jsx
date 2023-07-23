import styles from "./Header.module.scss";
import SvgGenerator from "../../instruments/SvgGenerator";
import classNames from "classnames";

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

          <div className={styles.logo}>
            <h2 className={styles.logo__title}>MR. DRISKELL</h2>
            <div className={styles.logo__line}>
              <div className={styles.line__arrow_left}></div>
              <div className={styles.line__arrow_right}></div>
            </div>
            <h3 className={styles.logo__subtitle}>Tattoo shop</h3>
          </div>

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

        <div className={styles.header__line}>
          <div className={styles.line__arrow_left}></div>
          <div className={styles.line__arrow_right}></div>
        </div>

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
