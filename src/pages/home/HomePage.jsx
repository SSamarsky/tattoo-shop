import styles from './HomePage.module.css';
import Header from '../../components/header/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
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
                            <div className={styles.btn}>
                                <p>Смотреть каталог</p>
                            </div>
                        </div>
                        <div className={styles.slide_control}>
                            <div className={styles.control__btn}>
                                <div className={styles.btn__line_top}>
                                    <div className={styles.btn_line_arrow_top}></div>
                                </div>
                            </div>
                            <div className={styles.checkbox_container}>
                                <div className={styles.control__checkbox}>
                                    <div className={styles.checkbox_active}></div>
                                </div>
                                <div className={styles.control__checkbox}></div>
                                <div className={styles.control__checkbox}></div>
                                <div className={styles.control__checkbox}></div>
                                <div className={styles.control__checkbox}></div>
                            </div>
                            <div className={styles.control__btn}>
                                <div className={styles.btn__line_bottom}>
                                    <div className={styles.btn_line_arrow_bottom}></div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    );
}
 
export default HomePage;