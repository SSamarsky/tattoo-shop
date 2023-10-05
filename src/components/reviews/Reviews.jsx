import BtnOfSlider from "../ui/btns/btnOfSlider/btnOfSlider";
import Checkbox from "../ui/checkbox/Checkbox";
import styles from "./Reviews.module.scss";


const Reviews = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.slider}>
        <div className={styles.btn}>
          <BtnOfSlider direction={'left'} />
        </div>
        <div className={styles.slider__item}>
          <div className={styles.photo}></div>
          <div className={styles.review}>
            <p className={styles.text}>
              Заказал первый раз, заказ пришёл во время, упаковано все отлично,
              все заказанное соответствует описанию, но есть один маленький
              ньюанс, коробки все мятые, толи при упаковке так случилось толи
              на складе так отномятся с товаром, в целом всем доволен, буду
              заказывать ещё, сайт-магазин рекомендую к покупкам, в целом всем
              доволен, буду заказывать ещё
            </p>
            <div className={styles.contact}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.70205 0.0483339C5.5554 0.00950011 5.82807 0 8.00076 0H7.99826C10.1716 0 10.4433 0.00950011 11.2966 0.0483339C12.1483 0.0873344 12.73 0.222169 13.24 0.420005C13.7667 0.624174 14.2117 0.89751 14.6567 1.34252C15.1017 1.78719 15.375 2.23353 15.58 2.7597C15.7767 3.26837 15.9117 3.84971 15.9517 4.70139C15.99 5.55473 16 5.8274 16 8.00009C16 10.1728 15.99 10.4448 15.9517 11.2981C15.9117 12.1495 15.7767 12.731 15.58 13.2398C15.375 13.7658 15.1017 14.2122 14.6567 14.6568C14.2122 15.1018 13.7665 15.3758 13.2405 15.5802C12.7315 15.778 12.1495 15.9129 11.2978 15.9519C10.4445 15.9907 10.1726 16.0002 7.99976 16.0002C5.82723 16.0002 5.55473 15.9907 4.70139 15.9519C3.84988 15.9129 3.26837 15.778 2.75937 15.5802C2.23353 15.3758 1.78719 15.1018 1.34268 14.6568C0.897844 14.2122 0.624507 13.7658 0.420005 13.2397C0.222336 12.731 0.087501 12.1496 0.0483339 11.298C0.00966676 10.4446 0 10.1728 0 8.00009C0 5.8274 0.0100001 5.55456 0.0481672 4.70122C0.086501 3.84988 0.221503 3.26837 0.419838 2.75953C0.624841 2.23353 0.898177 1.78719 1.34318 1.34252C1.78785 0.897677 2.23419 0.624341 2.76037 0.420005C3.26904 0.222169 3.85038 0.0873344 4.70205 0.0483339ZM7.73388 1.44161H7.73421L8.00085 1.44168C10.1369 1.44168 10.39 1.44935 11.2336 1.48768C12.0136 1.52335 12.4369 1.65369 12.7189 1.76319C13.0922 1.90819 13.3584 2.08152 13.6382 2.36153C13.9182 2.64153 14.0916 2.9082 14.2369 3.28154C14.3464 3.56321 14.4769 3.98655 14.5124 4.76656C14.5508 5.6099 14.5591 5.86324 14.5591 7.99826C14.5591 10.1333 14.5508 10.3866 14.5124 11.23C14.4768 12.01 14.3464 12.4333 14.2369 12.715C14.0919 13.0883 13.9182 13.3542 13.6382 13.634C13.3582 13.914 13.0924 14.0873 12.7189 14.2323C12.4372 14.3423 12.0136 14.4723 11.2336 14.508C10.3902 14.5463 10.1369 14.5547 8.00085 14.5547C5.86465 14.5547 5.61148 14.5463 4.76814 14.508C3.98813 14.472 3.56479 14.3417 3.28262 14.2322C2.90929 14.0872 2.64262 13.9138 2.36261 13.6338C2.08261 13.3538 1.90927 13.0878 1.76394 12.7143C1.65444 12.4326 1.52394 12.0093 1.48844 11.2293C1.4501 10.386 1.44244 10.1326 1.44244 7.99626C1.44244 5.8599 1.4501 5.6079 1.48844 4.76456C1.5241 3.98455 1.65444 3.56121 1.76394 3.27921C1.90894 2.90587 2.08261 2.6392 2.36261 2.35919C2.64262 2.07919 2.90929 1.90586 3.28262 1.76052C3.56463 1.65052 3.98813 1.52052 4.76814 1.48468C5.50615 1.45135 5.79215 1.44135 7.28317 1.43968V1.44168C7.42243 1.44147 7.57223 1.44153 7.73388 1.44161ZM12.2713 2.77004C11.7413 2.77004 11.3113 3.19955 11.3113 3.72972C11.3113 4.25972 11.7413 4.68973 12.2713 4.68973C12.8013 4.68973 13.2313 4.25972 13.2313 3.72972C13.2313 3.19971 12.8013 2.76971 12.2713 2.76971V2.77004Z"
                    fill="#BB8C5F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.89233 7.99998C3.89233 5.73118 5.73176 3.89169 8.00055 3.8916C10.2694 3.8916 12.1084 5.73112 12.1084 7.99998C12.1084 10.2688 10.2696 12.1075 8.00071 12.1075C5.73186 12.1075 3.89233 10.2688 3.89233 7.99998ZM10.6673 7.99996C10.6673 6.52711 9.47325 5.33326 8.00057 5.33326C6.52772 5.33326 5.33387 6.52711 5.33387 7.99996C5.33387 9.47264 6.52772 10.6667 8.00057 10.6667C9.47325 10.6667 10.6673 9.47264 10.6673 7.99996Z"
                    fill="#BB8C5F"
                  />
                </svg>
              </div>
              <p className={styles.nickname}>@Velli7350</p>
            </div>
          </div>
        </div>
        <div className={styles.slider__item}>
          <div className={styles.photo}></div>
          <div className={styles.review}>
            <p className={styles.text}>
              Положили всё необходимое + наклейку, скидочную карту и леденцы,
              неожиданным было то, что держатель и клип-корд в наборе пришёл
              не того цвета, меня даже порадовало, вот только разочаровала одна
              упакованная игла, которую не получилось адекватно достать
            </p>
            <div className={styles.contact}>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.70205 0.0483339C5.5554 0.00950011 5.82807 0 8.00076 0H7.99826C10.1716 0 10.4433 0.00950011 11.2966 0.0483339C12.1483 0.0873344 12.73 0.222169 13.24 0.420005C13.7667 0.624174 14.2117 0.89751 14.6567 1.34252C15.1017 1.78719 15.375 2.23353 15.58 2.7597C15.7767 3.26837 15.9117 3.84971 15.9517 4.70139C15.99 5.55473 16 5.8274 16 8.00009C16 10.1728 15.99 10.4448 15.9517 11.2981C15.9117 12.1495 15.7767 12.731 15.58 13.2398C15.375 13.7658 15.1017 14.2122 14.6567 14.6568C14.2122 15.1018 13.7665 15.3758 13.2405 15.5802C12.7315 15.778 12.1495 15.9129 11.2978 15.9519C10.4445 15.9907 10.1726 16.0002 7.99976 16.0002C5.82723 16.0002 5.55473 15.9907 4.70139 15.9519C3.84988 15.9129 3.26837 15.778 2.75937 15.5802C2.23353 15.3758 1.78719 15.1018 1.34268 14.6568C0.897844 14.2122 0.624507 13.7658 0.420005 13.2397C0.222336 12.731 0.087501 12.1496 0.0483339 11.298C0.00966676 10.4446 0 10.1728 0 8.00009C0 5.8274 0.0100001 5.55456 0.0481672 4.70122C0.086501 3.84988 0.221503 3.26837 0.419838 2.75953C0.624841 2.23353 0.898177 1.78719 1.34318 1.34252C1.78785 0.897677 2.23419 0.624341 2.76037 0.420005C3.26904 0.222169 3.85038 0.0873344 4.70205 0.0483339ZM7.73388 1.44161H7.73421L8.00085 1.44168C10.1369 1.44168 10.39 1.44935 11.2336 1.48768C12.0136 1.52335 12.4369 1.65369 12.7189 1.76319C13.0922 1.90819 13.3584 2.08152 13.6382 2.36153C13.9182 2.64153 14.0916 2.9082 14.2369 3.28154C14.3464 3.56321 14.4769 3.98655 14.5124 4.76656C14.5508 5.6099 14.5591 5.86324 14.5591 7.99826C14.5591 10.1333 14.5508 10.3866 14.5124 11.23C14.4768 12.01 14.3464 12.4333 14.2369 12.715C14.0919 13.0883 13.9182 13.3542 13.6382 13.634C13.3582 13.914 13.0924 14.0873 12.7189 14.2323C12.4372 14.3423 12.0136 14.4723 11.2336 14.508C10.3902 14.5463 10.1369 14.5547 8.00085 14.5547C5.86465 14.5547 5.61148 14.5463 4.76814 14.508C3.98813 14.472 3.56479 14.3417 3.28262 14.2322C2.90929 14.0872 2.64262 13.9138 2.36261 13.6338C2.08261 13.3538 1.90927 13.0878 1.76394 12.7143C1.65444 12.4326 1.52394 12.0093 1.48844 11.2293C1.4501 10.386 1.44244 10.1326 1.44244 7.99626C1.44244 5.8599 1.4501 5.6079 1.48844 4.76456C1.5241 3.98455 1.65444 3.56121 1.76394 3.27921C1.90894 2.90587 2.08261 2.6392 2.36261 2.35919C2.64262 2.07919 2.90929 1.90586 3.28262 1.76052C3.56463 1.65052 3.98813 1.52052 4.76814 1.48468C5.50615 1.45135 5.79215 1.44135 7.28317 1.43968V1.44168C7.42243 1.44147 7.57223 1.44153 7.73388 1.44161ZM12.2713 2.77004C11.7413 2.77004 11.3113 3.19955 11.3113 3.72972C11.3113 4.25972 11.7413 4.68973 12.2713 4.68973C12.8013 4.68973 13.2313 4.25972 13.2313 3.72972C13.2313 3.19971 12.8013 2.76971 12.2713 2.76971V2.77004Z"
                    fill="#BB8C5F"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.89233 7.99998C3.89233 5.73118 5.73176 3.89169 8.00055 3.8916C10.2694 3.8916 12.1084 5.73112 12.1084 7.99998C12.1084 10.2688 10.2696 12.1075 8.00071 12.1075C5.73186 12.1075 3.89233 10.2688 3.89233 7.99998ZM10.6673 7.99996C10.6673 6.52711 9.47325 5.33326 8.00057 5.33326C6.52772 5.33326 5.33387 6.52711 5.33387 7.99996C5.33387 9.47264 6.52772 10.6667 8.00057 10.6667C9.47325 10.6667 10.6673 9.47264 10.6673 7.99996Z"
                    fill="#BB8C5F"
                  />
                </svg>
              </div>
              <p className={styles.nickname}>@mark_love</p>
            </div>
          </div>
        </div>
        <BtnOfSlider direction={'right'} />
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


