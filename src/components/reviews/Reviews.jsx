import BtnOfSlider from "../ui/btns/btnOfSlider/btnOfSlider";
import Checkbox from "../ui/checkbox/Checkbox";
import styles from "./Reviews.module.scss";
import Review from "./review/Review";


const Reviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.slider}>
        <Review num={0} behind={true} position={'left'} />
        <div className={styles.btn__left}>
          <BtnOfSlider direction={'left'} />
        </div>
        { Array(2).fill(0).map((el, i) => {
          return <Review key={i} num={i} />
        }) }
        <div className={styles.btn__right}>
          <BtnOfSlider direction={'right'} />
        </div>
        <Review num={1} behind={true} position={'right'} />
      </div>
      <div className={styles.buttons}>
        <Checkbox />
        <Checkbox active={true} />
        <Checkbox />
        <Checkbox />
        <Checkbox />
      </div>
    </div>
  );
};

export default Reviews;


