import styles from './Logo.module.scss';


const Logo = () => {
    return (  
        <div className={styles.logo}>
            <h2 className={styles.logo__title}>MR. DRISKELL</h2>
            <div className={styles.logo__line}>
              <div className={styles.line__arrow_left}></div>
              <div className={styles.line__arrow_right}></div>
            </div>
            <h3 className={styles.logo__subtitle}>Tattoo shop</h3>
          </div>
    );
}
 
export default Logo;