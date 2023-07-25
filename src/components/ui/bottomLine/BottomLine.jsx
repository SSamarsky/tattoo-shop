import styles from './BottomLine.module.scss';
import classNames from 'classnames';


const BottomLine = () => {
    return (
        <div className={styles.line}>
            <div className={classNames(styles.arrow, styles.left)}></div>
            <div className={classNames(styles.arrow, styles.right)}></div>
        </div>
    );
}
 
export default BottomLine;