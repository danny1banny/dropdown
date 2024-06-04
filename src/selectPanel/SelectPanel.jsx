import { useState } from 'react';
import styles from '../../src/style/select.module.css'
import { IconArrow } from '../icons/IconsTools';
import ValueDisplay from './components/ValueDisplay';
import SearchInput from './components/SearchInput';
import OptionsList from './components/OptionsList';



const SelectPanel = ({multiple, onChange, value, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchVale] = useState("");
  
  function selectOption(option) {
    if (multiple) {
      if(value.includes(option)) {
        onChange(value.filter(event => event !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (option !== value) onChange(option)
    }
  };

  function isOptionSelected(option) {
    return multiple ? value.includes(option) : option == value
  };

  const handleContainerClick = () => {
    setIsOpen(prev => !prev)
    setSearchVale('')
  };
  

  return (
    <div className={styles.wrapper}>
      <p>Язык</p>
      <div
      onClick={handleContainerClick} 
      className={styles.container}
      tabIndex={0}>

        <ValueDisplay 
        multiple={multiple}
        value={value} 
        selectOption={selectOption}/>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        <SearchInput 
          searchValue={searchValue}
          setSearchVale={setSearchVale}
        />
        <OptionsList 
        options={options}
        searchValue={searchValue}
        multiple={multiple}
        isOptionSelected={isOptionSelected}
        selectOption={selectOption}
        />
      </ul> 
        <span className={`${styles.arrow} ${isOpen ? styles.active : ""}`}>
          <IconArrow/>
        </span>
      </div>
    </div>
  )
}

export default SelectPanel;