import { useState } from "react";

function InputState2() {
    const[ inputValue, settInputValue] = useState({
        t1: "",
        t2: "",
        t3: "",
    });

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`name: ${name}, value: ${value}`);

        const newInputValue = {
            ...inputValue,
            [name]: value,
        }

        settInputValue(newInputValue);

        const addr = "address";
        const address = "부산 남구"
        // 키값은 대괄호 감싸서 , value 값은 그냥 변수 참조

        const obj = {
            name: "이진혁",
            age: 28,
            ["address"]: address,
            address: "부산 부산진구",
        }
        
        // const obj2 = obj; // 얕은복사

        const obj2 = {          // 깊은 복사
           ...obj
        }
    }

    
    return <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange}/>
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange}/>
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange}/>

        <input type="text" value={inputValue.t1} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t2} onChange={(e) => {console.log(e)}}/>
        <input type="text" value={inputValue.t3} onChange={(e) => {console.log(e)}}/>

    </div>
}

export default InputState2;