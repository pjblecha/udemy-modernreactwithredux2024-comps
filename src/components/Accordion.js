import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleClick = (nextIndex) => setExpandedIndex(nextIndex);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
 
        return (
            <div key={item.id}>
                <div onClick={() => handleClick(index)}>{item.header}</div>
                {isExpanded && <div>{item.body}</div>}
            </div>
        );
    });
    return <div>{renderedItems}</div>;
}


export default Accordion;