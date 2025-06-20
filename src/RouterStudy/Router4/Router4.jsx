import React, { useEffect } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';

/** PathParam */
function Component1() {
    const { name } = useParams();
    console.log(name);

    return <></>
}

/** SearchParam */
function Component2() {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const entries = searchParams.entries();
        let searchParamObj = {};
        while (true) {
            const next = entries.next();
            if(next.done) {
                break;
            } 
            const [ key, value ] = next.value;
            
            searchParamObj = {
                ...searchParamObj,
                [key]: value,
            }
        }
        console.log(searchParamObj);
        console.log(searchParams.getAll("address"));
    }, [searchParams]);
    
    const handleOnClick = () => {
        setSearchParams(prev => {
            prev.set("address", "busan");
            return prev;
        });
    }
    
    return <>
        <div>
            <button onClick={handleOnClick}>주소 추가</button>
        </div>
    </>
}


function Router4(props) {

    return (
        <div>
            <Routes>
                <Route path='/param1/:name' element={<Component1 />}/>
                <Route path='/param2' element={<Component2 />}/>
            </Routes>
        </div>
    );
}

export default Router4;