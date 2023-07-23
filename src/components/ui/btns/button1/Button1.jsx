import SvgGenerator from '../../../../instruments/SvgGenerator';
import styles from './Button1.module.scss'


const Button1 = ({text}) => {
    return (
        <div className={styles.btn}>
            <SvgGenerator className={styles.svg} name='btn1' />
            <p className={styles.text}>{text}</p>
        </div>
    );
}
 
export default Button1;