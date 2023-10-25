import styles from "./Search.module.scss";
import SvgGenerator from "../../../instruments/SvgGenerator";

const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.search__input} placeholder="Поиск" />
      <span className={styles.search__icon}>
        <SvgGenerator name="search" />
      </span>
    </div>
  );
};

export default Search;
