import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import UserInterface from "./userInterface/UserInterface";
import Navigation from "./navigation/Navigation";
import ContactsHeader from "./contactsHeader/ContactsHeader";
import Search from "./search/Search";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__up}>
          <div className={styles.up__left}>
            <ContactsHeader />
            <Logo />
          </div>
          <div className={styles.up__right}>
            <UserInterface />
          </div>
        </div>
        <svg
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

        <div className={styles.header__down}>
          <div className={styles.menu__control}>
            <div className={styles.control}>
              <div className={styles.control__title}>Каталог</div>
              <div className={styles.burger}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          <Search />
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
