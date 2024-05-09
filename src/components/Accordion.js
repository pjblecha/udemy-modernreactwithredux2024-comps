

function Accordion({ items }) {
    const renderedItems = items.map((item) => {
        return (
            <div key={item.id}>
                <div>{item.header}</div>
                <div>{item.body}</div>
            </div>
        );
    });
    return <div>{renderedItems}</div>;
}


export default Accordion;