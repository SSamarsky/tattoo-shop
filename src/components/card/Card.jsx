import styles from "./Card.module.scss";
import classNames from "classnames";
import StatusLabel from "../ui/statusLabel/StatusLabel";
import Heart from "../ui/icons/heart/Heart";
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
          <Heart />
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
