import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'ac4290c9-7bfc-4cf0-9b2b-d94699a74a55', 
            header: 'Bacon ipsum dolor amet?',
            body: 'Amet ut rump lorem nisi in beef officia, meatloaf ball tip jerky eiusmod voluptate. Prosciutto jowl irure non chuck beef ribs magna.'
        },
        {
            id: '27ed4faf-c768-48bc-aa91-47deae976925',
            header: 'Hamburger in buffalo?',
            body: 'Frankfurter short loin reprehenderit ipsum consequat drumstick chuck nostrud ullamco tongue brisket.'
        },
        {
            id: '615a0366-c6c7-4d2b-b887-12ef420f52ff',
            header: 'Kevin cow labore?',
            body: 'Veniam proident elit laboris. Sint beef burgdoggen, aliqua veniam beef ribs capicola ex tri-tip pig reprehenderit mollit pork belly.'
        }
    ];

    return (
        <Accordion items={items} />
    );
}

export default App;