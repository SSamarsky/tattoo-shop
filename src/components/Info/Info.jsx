import Button2 from "../ui/btns/button/Button";
import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.info}>
        <h2 className={styles.title}>Тату магазин Mr. Driskell</h2>
        <p className={styles.text}>
          Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются
          энтузиасты индустрии, профессиональные мастера и новички, которые
          только делают первые шаги в тату искусстве. Мы знаем, насколько важно
          грамотно и точно подобрать инструменты для продуктивных тату сеансов,
          и помогаем быстро найти то, что поможет их сделать именно такими.
        </p>
        <p className={styles.text}>
          В нашем ассортименте не просто тату оборудование, это буквально целая
          команда из грамотных и действительно эффективных помощников на вашем
          рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов
          под пристальным взглядом отечественных машиностроителей, космецевтов
          и брендов с мировым именем, эти товары нарабатывали опыт и каждый день
          становились лучше, чтобы показать, на что они способны, и помочь
          раскрыть ваш потенциал.
        </p>
        <div className={styles.button}>
            <Button2 type={2} text={"О компании"} />
        </div>
        
      </div>
    </div>
  );
};

export default Info;
