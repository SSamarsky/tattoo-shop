import React from "react";
import classNames from "classnames";
import styles from "./Brands.module.scss";
import { useResize } from "./../../hooks/useResize";

const Brands = () => {
  return (
    <div className={styles.brands}>
      <h2 className={styles.title}>Популярные бренды</h2>
      <p className={styles.link}>Смотреть все</p>
      <div className={styles.slider}>
        {useResize() > 768 ? (
          <button className={classNames(styles.btn, styles.left)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M5 12L15 6.2265L15 17.7735L5 12Z" fill="#BB8C5F" />
            </svg>
          </button>
        ) : (
          ""
        )}

        <div className={styles.items}>
          {Array(10)
            .fill("img")
            .map((el, id) => {
              let s = `images/brands/${id + 1}.png`;
              return <img className={styles.item} src={s} key={id} alt="" />;
            })}
          <svg
            className={styles.line__hor}
            xmlns="http://www.w3.org/2000/svg"
            height="7"
            viewBox="0 0 1213 7"
            fill="none"
          >
            <mask
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="0"
              height="0"
              fill="black"
            >
              <rect fill="white" width="0" height="0" />
            </mask>
            <path
              d="M1207.5 4L1212.5 6.38675V0.613249L1207.5 3V4ZM5.5 3L0.5 0.613249V6.38675L5.5 4V3ZM1208 3L5 3V4L1208 4V3Z"
              fill="#D0D0D0"
              mask="url(#)"
            />
          </svg>
          {Array(4)
            .fill(1)
            .map((el, i) => {
              let classN = styles["line__ver" + i];
              return (
                <svg
                  className={classN}
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="204"
                  viewBox="0 0 7 204"
                  fill="none"
                >
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="0"
                    height="0"
                    fill="black"
                  >
                    <rect fill="white" width="0" height="0" />
                  </mask>
                  <path
                    d="M4 5.5L6.38675 0.5L0.613249 0.5L3 5.5L4 5.5ZM2.99999 198.5L0.61324 203.5L6.38674 203.5L3.99999 198.5L2.99999 198.5ZM3 5L2.99999 199L3.99999 199L4 5L3 5Z"
                    fill="#D0D0D0"
                    mask="url(#)"
                  />
                </svg>
              );
            })}
        </div>
        {useResize() > 768 ? (
          <button className={classNames(styles.btn, styles.right)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M18 12L8 6.2265L8 17.7735L18 12Z" fill="#BB8C5F" />
            </svg>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Brands;