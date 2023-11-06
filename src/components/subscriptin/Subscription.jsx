import styles from "./Subscription.module.scss";

const Subscription = () => {
  const foo = () => window.scrollTo(0, 0);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.form}>
          <h2 className={styles.title}>Узнавайте первыми</h2>
          <p className={styles.text}>
            Подпишитесь на новостную рассылку с самыми интересными новостями
            и акциями
          </p>
          <form>
            <label className={styles.label}>
              Эл. почта
              <input type="mail" placeholder={"Figur@mail.ru"} />
            </label>
            <label className={styles.label}>
              Имя
              <input type="name" placeholder={"Введите имя"} />
            </label>
            <label className={styles.label_checkbox}>
              <input type="checkbox" />
              Вы соглашаетесь на обработку ваших персональных данных
            </label>
            <button
              className={styles.button}
              onClick={(e) => e.preventDefault()}
            >
              Подписаться
            </button>
          </form>
        </div>
        <div className={styles.banner}>
          <div className={styles.comeback} onClick={foo}>
            <p>Вернуться вверх</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M12 6L6.2265 16L17.7735 16L12 6Z" fill="#BB8C5F" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
