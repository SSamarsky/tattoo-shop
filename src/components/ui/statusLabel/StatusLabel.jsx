/* eslint-disable default-case */
import styles from "./StatusLabel.module.scss";

const StatusLabel = ({ status, text }) => {
  switch (status) {
    case "new":
      return (
        <div className={styles.container}>
          <svg
            width="85"
            height="29"
            viewBox="0 0 85 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.5884 14.7839L84.0478 28.5H0.5V0.5H84.0478L74.5884 14.2161L74.3926 14.5L74.5884 14.7839Z"
              fill="#F5F5F5"
              stroke="#BB8C5F"
            />
          </svg>
          <span>{text}</span>
        </div>
      );
  }
};

export default StatusLabel;
