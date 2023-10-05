import styles from './Checkbox.module.scss';
import classNames from 'classnames';

const Checkbox = ({ active = false } ) => {
    return (
        <div className={styles.checkbox}>
            <div className={classNames(styles.checked, active ? styles.active : '')}></div>
        </div>
    );
}
 
export default Checkbox;