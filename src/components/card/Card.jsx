import styles from './Card.module.scss';
import classNames from 'classnames';

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.img} style={{backgroundImage: `url(${data.imgUrl})`}}>
            </div>
            <div className={styles.checkboxes}>
                <div className={classNames(styles.checkbox, styles.checkbox_active)}></div>
                <div className={styles.checkbox}></div>
                <div className={styles.checkbox}></div>
                <div className={styles.checkbox}></div>
            </div>
            <p className={styles.title}>{data.name}</p>
            <p className={styles.price}>{data.price}</p>
        </div>
    );
}
 
export default Card;