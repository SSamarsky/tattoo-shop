import styles from "./ContactsHeader.module.scss";
import SvgGenerator from "../../../instruments/SvgGenerator";
import classNames from "classnames";

const ContactsHeader = () => {
  return (
    <div className={styles.contacts}>
      <div>
        <a
          className={classNames(
            styles.contacts__item,
            styles.contacts__item_fix
          )}
          href="tel:+79525525252"
        >
          <SvgGenerator name={"call"} />
          +7 952 552-52-52
        </a>
        <div className={styles.messengers}>
          <div>Viber</div>
          <div className={styles.active}>Whats App</div>
          <div>Telegram</div>
        </div>
      </div>
      <a className={styles.contacts__item} href="mailto:mr.driskell@mail.ru">
        <SvgGenerator name={"mail"} />
        Mr.Driskell@mail.ru
      </a>
    </div>
  );
};

export default ContactsHeader;
