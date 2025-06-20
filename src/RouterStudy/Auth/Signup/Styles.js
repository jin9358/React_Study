import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    box-sizing: border-box;
    padding-bottom: 60px;
`;

export const title = css`
    margin: 10px 0 40px;
    font-size: 30px;
    cursor: default;
`;

export const container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px;
    width: 350px;
`;

export const inputItem = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
`;

export const inputContainer = (status) => css`
    display: flex;
    align-items: center;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 35px;
    background-color: #fff;

    & > input {
        box-sizing: border-box;
        border: none;
        outline: none;
        flex-grow: 1;
        height: 100%;
        padding: 0 10px;
    }

    & > p {
        display: flex;
        align-items: center;
        padding: 0 10px;
        cursor: pointer;
    }

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 100%;

        & * {
            font-size: 20px;
            color: ${status === "success" ? "#38ba00" : "#f10400"};
        }
    }
`;

export const messageContainer = () => css`
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    padding: 0 5px;
    width: 100%;
    text-align: left;
    font-size: 12px;
    color: #f10400;
    cursor: default;
`;

export const submitButton = css`
    box-sizing: border-box;
    margin-top: 15px;
    border: 1px solid #dbdbdb;
    border-radius: 0;
    width: 350px;
    background-color: #00b3ff;
    color: #fff;
    font-weight: 600;

    &:disabled {
        background-color: #d5d5d5;
        border: none;
        color: #fff;
        font-weight: 600;
        cursor: default;
    }
`;