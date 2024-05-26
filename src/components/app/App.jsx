import { useState } from "react";
import SelectPanel from "../selectPanel/SelectPanel";
import { Germany, Italy ,Poland ,Spain , UnitedKingdom,Russia } from '../../icons/IconFlag';

const options = [
  {label: "Русский", value: 1, flag: <Russia/>},
  {label: "Английский", value: 2, flag: <UnitedKingdom/>},
  {label: "Испанский", value: 3, flag: <Spain/>},
  {label: "Немецкий", value: 4, flag: <Germany/>},
  {label: "Итальянский", value: 5, flag: <Italy/>},
  {label: "Польский", value: 6, flag: <Poland/>}
]

const App = () => {
  const [value, setValue] = useState([]);

  return(
  <div>
    <SelectPanel multiple options={options} value={value} onChange={e => setValue(e)} />
  </div>
)}

export default App;
