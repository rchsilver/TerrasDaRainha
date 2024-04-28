// import { useState } from "react";
import {SectionChoiceBox} from "./styleChoiceBox"

const ChoiceBox = () => {
    // const [choice, setChoice] = useState<string>("");
    return <SectionChoiceBox>
        <p>Deseja se comunicar com ele?</p>
        <ul>
            <li>Sim</li>
            <li>Não</li>
        </ul>
    </SectionChoiceBox>
}

export {ChoiceBox}