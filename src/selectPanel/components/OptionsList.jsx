import styles from '../../style/select.module.css'


const OptionsList = ({options, searchValue, multiple, isOptionSelected, selectOption}) => {

  const filterOptions = () => {
    if (!searchValue) {
        return options;
    }
    return options.filter((lang) => lang.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  };

  return (
    filterOptions().map(option => (
      <li onClick={e => {
          e.stopPropagation()
        }}
        key={option.label}
        className={styles.option}>
            <label 
            htmlFor={option.value}  
            className={styles.labelCheckbox}
            onClick={()=>{selectOption(option)}}
            >
            {option.flag}{option.label}  
           </label>
          {multiple ? <input 
                type="checkbox"
                id={option.value}
                value={option.label}
                className={styles.checkbox}
                checked={isOptionSelected(option)}
                readOnly
                /> : ""}
                <label htmlFor={option.value}></label>

      </li>
      ))
    )
}

export default OptionsList;