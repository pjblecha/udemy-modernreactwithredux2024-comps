import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from "../components/Button";
function ButtonPage() {
    return (
        <div>
            <div><Button success primary rounded><GoBell />Click Here!</Button></div>
            <div><Button danger><GoCloud />A button</Button></div>
            <div><Button warning><GoDatabase />Another Button</Button></div>
            <div><Button secondary outline>Kinda redundant</Button></div>
            <div><Button secondary rounded>Bored yet?</Button></div>
            <div><Button warning outline>Okay, last one</Button></div>
        </div>
    );
}

export default ButtonPage;