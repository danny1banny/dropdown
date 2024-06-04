import { IconGlass } from "../../icons/IconsTools";
import styles from '../../style/select.module.css'

const SearchInput = ({setSearchVale, searchValue}) => {
  return (
    <div className={styles["search-input-wrapper"]}>
              <IconGlass className={styles.IconGlass}/>
              <input
              className={styles["search-input"]}
              placeholder={"Поиск"} 
              type="text"
              value={searchValue}
              onClick={e => e.stopPropagation()}
              onChange={(e) => setSearchVale(e.target.value.trimStart())}
              />
    </div>
  )
};

export default SearchInput;