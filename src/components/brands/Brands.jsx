import BtnOfSlider from '../ui/btns/btnOfSlider/btnOfSlider';
import styles from './Brands.module.scss';
import classNames from 'classnames';

const Brands = () => {
    return (
        <div className={styles.brands}>
            <h2 className={styles.title}>Популятрные бренды</h2>
            <p className={styles.link}>Смотреть все</p>
            <div className={styles.slider}>
                <div className={classNames(styles.button, styles.button__left)}>
                    <BtnOfSlider direction={'left'}/>
                </div>
                <div className={styles.items}>
                    { Array(10).fill('img').map((el, id) => {
                        let s = `images/brands/${id + 1}.png`;
                        return <img className={styles.item} src={s} key={id} alt=''/>
                    })}
                </div>
                <div className={classNames(styles.button, styles.button__right)}>
                    <BtnOfSlider direction={'right'}/>
                </div>
            </div>
        </div>
    );
}
 
export default Brands;