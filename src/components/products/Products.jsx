import Card from '../card/Card';
import styles from './Products.module.scss';
import products from '../../assets/data/products.js';
import Button1 from '../ui/btns/button1/Button1';


const Products = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.nav}>
                <li className={styles.nav__item}>Хиты продаж</li>
                <li className={styles.nav__item}>Самые популярные</li>
                <li className={styles.nav__item}>Новые поступления</li>
                <li className={styles.nav__item}>Акционные товары</li>
            </ul>
            <div className={styles.cards}>
                {products.map(el => {
                    return <Card data={el} />;
                })}
            </div>
            <Button1 text={'Показать ещё'} className={styles.btn} />
        </div>
    );
}
 
export default Products;