import { useState } from "react";

function Calculator() {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("0");

    const getResult = () => {
        let inputText = input;
        let plusNums = [];
        let minusNums = [];
        let lastCalc = "";

        const plusIndex = input.indexOf("+");
        const minusIndex = input.indexOf("-");

        if (plusIndex == -1 && minusIndex == -1){
            return;
        }

        if (plusIndex < 0) {
            const numText = inputText.substring(0, minusIndex);
            const restNumText = inputText.substring(minusIndex + 1);
            console.log(numText);
            console.log(restNumText);
        } 

        if (minusIndex < 0) {
            const numText = inputText.substring(0, plusIndex);
            const restNumText = inputText.substring(plusIndex + 1);
            console.log(numText);
            console.log(restNumText);
        } 

        if (plusIndex < minusIndex) {
            const numText = inputText.substring(0, plusIndex);
            const restNumText = inputText.substring(plusIndex + 1);
        } else {
            const numText = inputText.substring(0, minusIndex);
            const restNumText = inputText.substring(minusIndex + 1);
        }
        console.log(plusIndex);
        console.log(minusIndex);
    }
    
    const handleOnClick = (e) => {
        if(e.target.value == "=") {
            getResult();
            // setResult(eval(input));         // eval : 문자열 그대로 코드로 해석하고 실행
            // setInput("0");
            return;
        }
        if(input === "0") {
            setInput(e.target.value)
        } else {
            setInput(input + e.target.value);
        }
    }

    return <div>
        <h1>입력: {input}</h1>
        <h1>결과: {result}</h1>
            <button>0</button>
        <div>
            <button value={1} onClick={handleOnClick}>1</button>
            <button value={2} onClick={handleOnClick}>2</button>
            <button value={3} onClick={handleOnClick}>3</button>
        </div>
        <div>
            <button value={4} onClick={handleOnClick}>4</button>
            <button value={5} onClick={handleOnClick}>5</button>
            <button value={6} onClick={handleOnClick}>6</button>  
        </div>
        <div>
            <button value={7} onClick={handleOnClick}>7</button>
            <button value={8} onClick={handleOnClick}>8</button>
            <button value={9} onClick={handleOnClick}>9</button>
        </div>
        <div>
            <button value={"+"} onClick={handleOnClick}>+</button>
            <button value={"-"} onClick={handleOnClick}>-</button>
            <button value={"="} onClick={handleOnClick}>=</button>
        </div>
    </div>
}

export default Calculator;