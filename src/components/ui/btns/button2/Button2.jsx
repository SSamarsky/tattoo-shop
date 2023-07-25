import SvgGenerator from '../../../../instruments/SvgGenerator';
import styles from './Button2.module.scss'


const Button2 = ({text}) => {
    return (
        <div className={styles.btn}>
            <SvgGenerator className={styles.svg} name='btn2' />
            <p className={styles.text}>{text}</p>
        </div>
    );
}
 
export default Button2;