import styles from "./Review.module.scss";
import classNames from "classnames";
import Insta from "./insta/Insta";

const Review = ({ num, position='center', behind=false }) => {
    let pos = '';
    if (position === 'left') pos = styles.left;
    else if (position === 'right') pos = styles.right;
  return (
    <div className={classNames(styles.slider__item, behind ? styles.behind : '', pos)}>
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(./images/photo/${num + 1}.png)` }}
      ></div>
      <div className={styles.review}>
        <svg
          className={classNames(styles.line, styles.line_top)}
          xmlns="http://www.w3.org/2000/svg"
          width="598"
          height="12"
          viewBox="0 0 598 12"
          fill="none"
        >
          <path
            d="M10 5L5.04736e-07 0.226497L-5.04736e-07 11.7735L10 7L10 5ZM588 7.00005L598 11.7736L598 0.226549L588 5.00005L588 7.00005ZM9 7L589 7.00005L589 5.00005L9 5L9 7Z"
            fill="#BB8C5F"
          />
        </svg>
        {num === 0 ? (
          <p className={styles.text}>
            Заказал первый раз, заказ пришёл во время, упаковано все отлично,
            все заказанное соответствует описанию, но есть один маленький
            ньюанс, коробки все мятые, толи при упаковке так случилось толи
            на складе так отномятся с товаром, в целом всем доволен, буду
            заказывать ещё, сайт-магазин рекомендую к покупкам, в целом всем
            доволен, буду заказывать ещё
          </p>
        ) : (
          <p className={styles.text}>
            Положили всё необходимое + наклейку, скидочную карту и леденцы,
            неожиданным было то, что держатель и клип-корд в наборе пришёл
            не того цвета, меня даже порадовало, вот только разочаровала одна
            упакованная игла, которую не получилось адекватно достать
          </p>
        )}
        <Insta num={num}  behind={behind} />
        <svg
          className={classNames(styles.line, styles.line_bottom)}
          xmlns="http://www.w3.org/2000/svg"
          width="598"
          height="12"
          viewBox="0 0 598 12"
          fill="none"
        >
          <path
            d="M10 5L5.04736e-07 0.226497L-5.04736e-07 11.7735L10 7L10 5ZM588 7.00005L598 11.7736L598 0.226549L588 5.00005L588 7.00005ZM9 7L589 7.00005L589 5.00005L9 5L9 7Z"
            fill="#BB8C5F"
          />
        </svg>
      </div>
    </div>
  );
};

export default Review;
