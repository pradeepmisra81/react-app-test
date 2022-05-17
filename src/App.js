import { useState } from 'react';
import './App.css';
import Select from 'react-select';
import 'react-dropdown/style.css';

function App() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}

export default App;
