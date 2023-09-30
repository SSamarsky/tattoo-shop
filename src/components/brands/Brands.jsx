import styles from './Brands.module.scss';
import classNames from 'classnames';

const Brands = () => {
    return (
        <div className={styles.brands}>
            <h2 className={styles.title}>Популятрные бренды</h2>
            <p className={styles.link}>Смотреть все</p>
            <div className={styles.slider}>
                <button className={classNames(styles.button, styles.button__left)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L15 6.2265L15 17.7735L5 12Z" fill="#BB8C5F"/>
                    </svg>
                </button>
                <div className={styles.items}>
                    { Array(10).fill('img').map((el, id) => {
                        let s = `images/brands/${id + 1}.png`;
                        return <img className={styles.item} src={s} key={id} alt=''/>
                    })}
                </div>
                <button className={classNames(styles.button, styles.button__right)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 12L8 6.2265L8 17.7735L18 12Z" fill="#BB8C5F"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}
 
export default Brands;