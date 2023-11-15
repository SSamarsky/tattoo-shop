import React from "react";
import BtnOfSlider from "../ui/btns/btnOfSlider/btnOfSlider";
import styles from "./Brands.module.scss";

const Brands = () => {
  const [widthWindow, setWidthWindow] = React.useState(window.screen.width);

  React.useEffect(() => {
    window.onresize = () => {setWidthWindow(window.screen.width)};
    return () => {window.onresize = false};
}, [widthWindow]);
  return (
    <div className={styles.brands}>
      <h2 className={styles.title}>Популятрные бренды</h2>
      <p className={styles.link}>Смотреть все</p>
      <div className={styles.slider}>
        <BtnOfSlider direction={"left"} />
        <div className={styles.items}>
          {Array(widthWindow > 1360 ? 10 : widthWindow > 1150 ? 8 : 6)
            .fill("img")
            .map((el, id) => {
              let s = `images/brands/${id + 1}.png`;
              return <img className={styles.item} src={s} key={id} alt="" />;
            })}
        </div>
        <BtnOfSlider direction={"right"} />
      </div>
    </div>
  );
};

export default Brands;
