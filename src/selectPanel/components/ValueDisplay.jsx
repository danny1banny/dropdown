import { IconClose } from "../../icons/IconsTools"

import styles from '../../../src/style/select.module.css'

const ValueDisplay = ({multiple, value, selectOption}) => {
  return (
    <span className={styles.value}>
        {multiple 
            ? value.map(v => (
              <button 
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={styles["option-badge"]}>
                {v.label}
                <span className={styles["remove-btn"]}><IconClose/></span>
              </button>
            )) : value?.label}
    </span> 
  )
};

export default ValueDisplay;
      