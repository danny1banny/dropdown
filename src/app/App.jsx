import { useState } from "react";
import SelectPanel from "../selectPanel/SelectPanel";
import { options } from "../constants/optionst";

import styles from '../style/select.module.css'


const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [multiple, setMultiple] = useState(false);

  const handleSelectedItems = (item) => {
    setSelectedItems(item);
  }
  const handleMultipleChange = () => {
    setMultiple((prev) => !prev);
  };

  return(
  <div className={styles.root}>
    <label>
      <input 
      type="checkbox"
      checked={multiple}
      onChange={handleMultipleChange} 
      />
        Multiple
    </label>
    <SelectPanel
     multiple = {multiple}
     options={options} 
     value={selectedItems} 
     onChange={handleSelectedItems}/>
  </div>
)}

export default App;
