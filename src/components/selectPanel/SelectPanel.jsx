import { useState } from 'react';

import styles from '../../style/select.module.css'
import { IconArrow, IconClose,IconGlass } from '../../icons/IconsTools';



const SelectPanel = ({multiple, onChange, value, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchVale] = useState("");
  
  function selectOption(option) {
    if (multiple) {
      if(value.includes(option)) {
        onChange(value.filter(o => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  }


  const filterLang = () => {
    if (!searchValue) {
        return options;
    }
    return options.filter((lang) => lang.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  };


  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option == value
  }
  

  return (
    <div className={styles.wrapper}>
      <p>Язык</p>
      <div
      onClick={() => setIsOpen(prev => !prev)} 
      className={styles.container}
      tabIndex={0} >
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
        <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
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
            {filterLang().map(option => (
              <li onClick={e => {
                  e.stopPropagation()
                  console.log()
                }}
                key={option.label}
                className={styles.option}>
                    <label htmlFor={option.value}  className={styles.labelCheckbox}>
                      {option.flag}{option.label}  
                  </label>
                  {multiple ? <input 
                        type="checkbox"
                        id={option.value}
                        value={option.label}
                        className={styles.checkbox}
                        checked={isOptionSelected(option)}
                        onClick={()=>{selectOption(option)}}
                        readOnly
                        /> : ""}
                        

              </li>
            ))}
          </ul> 
          <span className={`${styles.arrow} ${isOpen ? styles.active : ""}`}>
            <IconArrow/>
          </span>
      </div>
    </div>
  )
}

export default SelectPanel;