import { css } from "@emotion/react";

export const container = css`
    display: flex;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    overflow: hidden;
`;

export const searchInput = css`
    flex-grow: 1;
    border: none;
    outline: none;
    padding: 5px 15px;
`;

export const searchButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 50px;
    font-size: 18px;
    cursor: pointer;
`;

export const filterContainer = css`
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    width: 100%;
    padding: 5px 10px;
`;