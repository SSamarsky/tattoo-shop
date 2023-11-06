import styles from './btnOfSlider.module.scss';
import classNames from 'classnames';


const BtnOfSlider = ({ direction }) => {
    return (
        <button className={classNames(styles.btn, direction === 'left' ? styles.left : styles.right)}>
            {
                direction === 'left' ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L15 6.2265L15 17.7735L5 12Z" fill="#BB8C5F"/>
                    </svg>
                :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 12L8 6.2265L8 17.7735L18 12Z" fill="#BB8C5F"/>
                    </svg>
            }
        </button>
    );
}
 
export default BtnOfSlider;