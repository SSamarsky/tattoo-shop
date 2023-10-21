import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <h2 className={styles.logo__title}>MR. DRISKELL</h2>
      {/* <div className={styles.logo__line}>
        <div className={styles.line__arrow_left}></div>
        <div className={styles.line__arrow_right}></div>
      </div> */}
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
      <h3 className={styles.logo__subtitle}>Tattoo shop</h3>
    </div>
  );
};

export default Logo;
