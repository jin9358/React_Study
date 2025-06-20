import { useState } from "react";

function InputState1() {
    const [ inputValue, setInputValue ] = useState("");
    const [ h1Text, setH1Text ] = useState("");

    const [ inputValue2, setInputValue2 ] = useState("");
    const [ h1Text2, setH1Text2 ] = useState("");

    console.log("렌더링");

    const handleOnChange = (e) => {
        console.log(e);
        setInputValue(e.target.value);
    }

    const handleOnChange2 = (e) => {
        console.log(e);
        setInputValue2(e.target.value);
    }

    const handleOnClick = () => {
        setH1Text(inputValue);
        setH1Text2(inputValue2);
    }

    return <div>
        <h1>{h1Text}</h1>
        <h1>{h1Text2}</h1>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <input type="text" value={inputValue2} onChange={handleOnChange2} />
        <button onClick={handleOnClick}>확인</button>
    </div>
}

export default InputState1;