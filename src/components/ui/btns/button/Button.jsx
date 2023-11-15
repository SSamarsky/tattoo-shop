import styles from "./Button.module.scss";
import classNames from "classnames";

const Button2 = ({ type, text }) => {
  return (
    <button className={styles.button} onClick={(e) => e.preventDefault()}>
      <svg
        className={classNames(
          styles.btn,
          type === 1 ? styles.btn__type1 : styles.btn__type2
        )}
        xmlns="http://www.w3.org/2000/svg"
        width="277"
        height="70"
        viewBox="0 0 277 70"
        fill="#BB8C5F"
      >
        <path
          d="M16.1091 17.5V1H260.891V17.5V26.25V26.8265L261.39 27.1154L275.005 35L261.39 42.8846L260.891 43.1735V43.75V52.5V69H16.1091V52.5V43.75V43.1735L15.6102 42.8846L1.99541 35L15.6102 27.1154L16.1091 26.8265V26.25V17.5Z"
          fill="#EEEEEE"
          stroke="#BB8C5F"
          strokeWidth="2"
        />
        <text textAnchor="middle" x="142" y="40" style={{ fontSize: "20px" }}>
          {text}
        </text>
      </svg>
    </button>
  );
};

export default Button2;
