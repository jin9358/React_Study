import React, { useEffect, useState } from 'react';

function Effect1(props) {
    const [ name, setName ] = useState("");
    const [ age, setAge ] = useState("");
    const [ h1Name, setH1Name ] = useState("");
    const [ h1Age, setH1Age ] = useState("");

    const handleNameOnChange = (e) => {
        setName(e.target.value);
    }
    const handleAgeOnChange = (e) => {
        setAge(e.target.value);
    }
    const handleNameOkOnClick = () => {
        setH1Name(name);
        console.log(h1Name);
    }
    const handleAgeOkOnClick = () => {
        setH1Age(age);
        console.log(h1Age);
    }

    useEffect(() => {
        console.log(h1Name);  
        console.log(h1Age);  
    }, [h1Name, h1Age]);

    return (
        <div>
            <h1>{h1Name}</h1>
            <h1>{h1Age}</h1>
            <input type="text" value={name} onChange={handleNameOnChange} />
            <button onClick={handleNameOkOnClick}>이름확인</button>
            <input type="text" value={age} onChange={handleAgeOnChange} />
            <button onClick={handleAgeOkOnClick}>나이확인</button>
        </div>
    );
}

export default Effect1;