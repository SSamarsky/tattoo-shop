import styles from "./Card.module.scss";
import classNames from "classnames";
import StatusLabel from "../ui/statusLabel/StatusLabel";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className={classNames(styles.card)}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${data.imgUrl})` }}
      >
        <div className={styles.card__top}>
          <StatusLabel status={"new"} text={"Новинка"} />
          <svg
            className={styles.like}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.262 9.62586V9.62282C18.7615 9.10014 19.1543 8.4846 19.418 7.81058C19.697 7.09752 19.8254 6.33445 19.7952 5.56936C19.765 4.80427 19.5768 4.0537 19.2424 3.36487C18.9081 2.67604 18.4348 2.06385 17.8524 1.56679C17.27 1.06974 16.591 0.698571 15.8582 0.476642C15.1253 0.254712 14.3545 0.186818 13.5942 0.277231C12.8339 0.367644 12.1005 0.614406 11.4401 1.002C10.8934 1.32291 10.4065 1.73461 9.99999 2.21855C9.59346 1.73461 9.1066 1.32291 8.55986 1.002C7.89952 0.614406 7.16612 0.367644 6.40578 0.277231C5.64545 0.186818 4.87463 0.254712 4.14181 0.476642C3.40899 0.698571 2.73002 1.06974 2.14759 1.56679C1.56517 2.06385 1.0919 2.67604 0.757545 3.36487C0.42319 4.0537 0.234984 4.80427 0.204764 5.56936C0.174544 6.33445 0.302964 7.09752 0.581948 7.81058C0.860931 8.52363 1.28446 9.17127 1.82587 9.71272L9.99997 17.8858L18.262 9.62586ZM3.04399 8.66732L9.99997 15.6243L17.0438 8.57847C17.4419 8.18025 17.7503 7.70152 17.9483 7.17437C18.1462 6.64722 18.2292 6.08384 18.1916 5.522C18.154 4.96017 17.9967 4.41287 17.7303 3.91679C17.4638 3.42072 17.0944 2.98735 16.6468 2.64573C16.1992 2.30411 15.6837 2.06215 15.1349 1.93606C14.5861 1.80997 14.0167 1.80267 13.4648 1.91466C12.913 2.02664 12.3915 2.25532 11.9352 2.58536C11.479 2.91539 11.0986 3.33916 10.8196 3.82824L10.7332 3.97957H9.26676L9.18042 3.82824C8.90136 3.33916 8.52097 2.91539 8.06473 2.58536C7.6085 2.25532 7.08698 2.02664 6.53514 1.91466C5.98329 1.80267 5.41389 1.80997 4.86509 1.93606C4.3163 2.06215 3.80081 2.30411 3.35318 2.64573C2.90556 2.98735 2.53614 3.42072 2.26971 3.91679C2.00328 4.41287 1.846 4.96017 1.8084 5.522C1.7708 6.08384 1.85375 6.64722 2.05171 7.17437C2.24966 7.70152 2.55803 8.18025 2.95615 8.57847L3.04399 8.66732Z"
              fill="#524336"
            />
            <path
              className={styles.like__fill}
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.262 9.62586V9.62282C18.7615 9.10014 19.1543 8.4846 19.418 7.81058C19.697 7.09752 19.8254 6.33445 19.7952 5.56936C19.765 4.80427 19.5768 4.0537 19.2424 3.36487C18.9081 2.67604 18.4348 2.06385 17.8524 1.56679C17.27 1.06974 16.591 0.698571 15.8582 0.476641C15.1253 0.254712 14.3545 0.186818 13.5942 0.277231C12.8339 0.367644 12.1005 0.614406 11.4401 1.002C10.8934 1.32291 10.4065 1.73462 9.99998 2.21855C9.59345 1.73462 9.10659 1.32291 8.55986 1.002C7.89951 0.614406 7.16612 0.367644 6.40578 0.277231C5.64545 0.186818 4.87463 0.254712 4.14181 0.476641C3.40899 0.698571 2.73002 1.06974 2.14759 1.56679C1.56517 2.06385 1.0919 2.67604 0.757544 3.36487C0.423189 4.0537 0.234984 4.80427 0.204764 5.56936C0.174544 6.33445 0.302964 7.09752 0.581948 7.81058C0.860931 8.52363 1.28446 9.17127 1.82587 9.71272L9.99997 17.8858L18.262 9.62586Z"
              fill="#BB8C5F"
            />
          </svg>
        </div>
      </div>
      <div className={styles.checkboxes}>
        <div
          className={classNames(styles.checkbox, styles.checkbox_active)}
        ></div>
        <div className={styles.checkbox}></div>
        <div className={styles.checkbox}></div>
        <div className={styles.checkbox}></div>
      </div>
      <p className={styles.title}>{data.name}</p>
      <p className={styles.price}>{data.price}</p>
      <button className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="259"
          height="50"
          viewBox="0 0 259 50"
          fill="none"
        >
          <path
            d="M16 7.5V1H243V7.5V16.25V16.8244L243.496 17.1138L257.015 25L243.496 32.8862L243 33.1756V33.75V42.5V49H16V42.5V33.75V33.1756L15.5039 32.8862L1.98463 25L15.5039 17.1138L16 16.8244V16.25V7.5Z"
            fill="#EEEEEE"
            stroke="#BB8C5F"
            strokeWidth="2"
          />
          <text textAnchor="middle" x="130" y="30" style={{ fontSize: "20px" }}>
            Добавить в корзину
          </text>
        </svg>
      </button>
    </div>
  );
};

export default Card;
