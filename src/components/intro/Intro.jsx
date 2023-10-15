import Button1 from "../ui/btns/button1/Button1";
import Checkbox from "../ui/checkbox/Checkbox";
import styles from "./Intro.module.scss";


const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.intro__inner}>
          <div className={styles.info}>
            <h1 className={styles.info__title}>
              Лучшие товары в мире татуировок
            </h1>
            <p className={styles.info__text}>
              Оборудование и расходники для самых ярких и качественных работ
            </p>
            <Button1 text={"Смотреть каталог"} />
          </div>
          <div className={styles.slide_control}>
            <div className={styles.control__btn}>
              <div className={styles.btn__line_top}>
                <div className={styles.btn__line__arrow_top}></div>
              </div>
            </div>
            <div className={styles.checkbox_container}>
              <Checkbox active={ true } />
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
            <div className={styles.control__btn}>
              <div className={styles.btn__line_bottom}>
                <div className={styles.btn__line__arrow_bottom}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
