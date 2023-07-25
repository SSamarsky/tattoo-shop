import Card from '../card/Card';
import styles from './Products.module.scss';
import products from '../../assets/data/products.js';
import Button2 from '../ui/btns/button2/Button2';
import BottomLine from '../ui/bottomLine/BottomLine';
import classNames from 'classnames';


const Products = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}>
                    <p className={styles.item__title}>Хиты продаж</p>
                    <BottomLine />
                </li>
                <li className={styles.nav__item}>
                    <p className={styles.item__title}>Самые популярные</p>
                    <BottomLine />
                </li>
                <li className={classNames(styles.nav__item, styles.item_active)}>
                    <p className={styles.item__title}>Новые поступления</p>
                    <BottomLine />
                </li>
                <li className={styles.nav__item}>
                    <p className={styles.item__title}>Акционные товары</p>
                    <BottomLine />
                </li>
            </ul>
            <div className={styles.cards}>
                {products.map(el => {
                    return <Card data={el} />;
                })}
            </div>
            <Button2 text={'Показать ещё'}/>
        </div>
    );
}
 
export default Products;