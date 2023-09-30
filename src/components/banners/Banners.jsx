import BottomLine from '../ui/bottomLine/BottomLine';
import styles from './Banners.module.scss';
import classNames from 'classnames';


const Banners = () => {
    return (
        <div className={styles.banners}>
            <div className={classNames(styles.banner, styles.left)}>
                <h2 className={classNames(styles.title, styles.title_left)}>Краски Lip Nitn</h2>
                <div className={classNames(styles.button, styles.button_left)}>
                    <p className={styles.link}>Смотреть в каталоге</p>
                    <BottomLine />
                </div>
            </div>
            <div className={classNames(styles.banner, styles.right)}>
                <h2 className={classNames(styles.title, styles.title_right)}>Foxx viper —хит 2021 года</h2>
                <div className={classNames(styles.button, styles.button_right)}>
                    <p className={styles.link}>Смотреть в каталоге</p>
                    <BottomLine />
                </div>
            </div>
        </div>
    );
}

export default Banners;