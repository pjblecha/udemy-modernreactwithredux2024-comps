import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
    const [selectedDDValue, setSelectedDDValue] = useState(null);

    const handleDDSelect = (option) => {
        setSelectedDDValue(option);
    };

    const options = [
        {
            'label': 'Red',
            'value': 'red'
        },
        {
            'label': 'Green',
            'value': 'green'
        },
        {
            'label': 'Blue',
            'value': 'blue'
        }
    ];

    return (
        <Dropdown options={options} selectedDDValue={selectedDDValue} onDDSelect={handleDDSelect} />
    );
}

export default App;