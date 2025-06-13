/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

const layout = css`
    width: 1200px;
    height: 800px;
`;

const header = css`  
    width: 100%;
    height: 100px;
    background-color: yellow;
`;

const main = (color) => css`  
    width: 100%;
    height: 600px;
    background-color: ${color};
`;

const footer = css`  
    width: 100%;
    height: 100px;
    background-color: green;
`;

function Router1(props) {
    const navigate = useNavigate();
    const [ data, setData ] = useState(0);

    return (
        <>
            <div css={layout}>
                <header css={header}>
                    <a href={"/color/red"}>RED</a>
                    <a href={"/color/blue"}>BLUE</a>
                    <a href={"/color/orange"}>ORANGE</a>
                    <div></div>
                    <Link to={"/color/red"}>RED</Link>
                    <Link to={"/color/blue"}>BLUE</Link>
                    <Link to={"/color/orange"}>ORANGE</Link>
                    <div></div>
                    <button onClick={() => navigate("/color/red")}>RED</button>
                    <button onClick={() => navigate("/color/blue")}>BLUE</button>
                    <button onClick={() => navigate("/color/orange")}>ORANGE</button>
                    <div>
                        <h1>{data}</h1>
                        <button onClick={() => setData(prev => prev + 1)}>+1</button>
                    </div>
                </header>
                <Routes>
                    <Route path='/color/red' element={<main css={main("red")}></main>} />
                    <Route path='/color/blue' element={<main css={main("blue")}></main>} />
                    <Route path='/color/orange' element={<main css={main("orange")}></main>} />
                </Routes>
                <footer css={footer}></footer>
            </div>
        </>
    );
}

export default Router1;