import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    & > h1 {
        margin: 0;
        padding: 0 10px;
        font-size: 20px;
        & > a {
            color: #222;
            font-weight: 600;
        }
    }

    & > ul {
        list-style-type: none;
        display: flex;
        gap: 10px;
        margin: 0;
        padding: 0 10px;

        & > li {
            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            border: 1px solid #dbdbdb;
            border-radius: 50%;
            width: 30px;
            height: 30px;

            & > a {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #555;
            }
        }
    }
`;