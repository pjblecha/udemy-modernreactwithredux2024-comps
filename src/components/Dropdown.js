import { useState } from "react";

function Dropdown({ options, selectedDDValue, onDDSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setIsOpen(false);
        onDDSelect(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div onClick={() => handleOptionSelect(option)} key={option.value}>
                {option.label}
            </div>
        );    
    });

    let ddContent = !!selectedDDValue ? selectedDDValue.label : 'Select:';
    
    
    return (
        <div>
            <div onClick={handleOpen}>{ddContent}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;