import Button from "./Button";

function App() {
    return (
        <div>
            <div><Button success primary rounded>Click Here!</Button></div>
            <div><Button danger>A button</Button></div>
            <div><Button warning>Another Button</Button></div>
            <div><Button secondary outline>Kinda redundant</Button></div>
            <div><Button secondary rounded>Bored yet?</Button></div>
            <div><Button warning outline>Okay, last one</Button></div>
        </div>
    );
}

export default App;