import { css } from "@emotion/react";

export const container = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const listContainer = css`
    flex-grow: 1;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    overflow: hidden;

    & > ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        height: 432px;
        overflow-y: scroll;

        & > li {
            position: relative;
            display: flex;
            box-sizing: border-box;
            border-bottom: 1px solid #dbdbdb;
            padding: 5px 10px;
            
            & > input[type=checkbox] {
                display: none;

                & + label {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;
                    border: 1px solid #dbdbdb;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                }

                &:checked + label::after {
                    content: "";
                    display: block;
                    border-radius: 50%;
                    width: 15px;
                    height: 15px;
                    background-color:#0b4f8f;
                }
            }
        }
    }
`;

export const todoTextContainer = (isOpen) => css`
    margin-left: 10px;
    width: 280px;
    text-align: start;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    ${
        isOpen ?
        `white-space: break-spaces;
        overflow-wrap: break-word;
        word-wrap: break-word;
        text-overflow: ellipsis;`
        :
        `white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;`
    }
`;

export const hiddenTrashBox = css`
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    overflow: hidden;
    cursor: pointer;
    &:hover > div {
        right: 0px;
    }
`;

export const trashBox = css`
    position: absolute;
    top: 0;
    right: -36px;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background-color:#ea0808;
    color: #fff;
    cursor: pointer;
`;

export const todoInputContainer = css`
    box-sizing: border-box;
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    width: 100%;
    height: 40px;
    overflow: hidden;

    & > input {
        box-sizing: border-box;
        border: none;
        outline: none;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
    }
`;