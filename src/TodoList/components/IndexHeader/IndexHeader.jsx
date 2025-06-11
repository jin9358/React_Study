/** @jsxImportSource @emotion/react */
import { IoSearch } from 'react-icons/io5';
import * as s from './styles';
import React from 'react';

function IndexHeader(props) {
    return (
        <>
            <div css={s.container}> 
                <input css={s.searchInput} type="text" />
                <button css={s.searchButton}><IoSearch /></button>
            </div>
            <div css={s.filterContainer}>
                <input type="radio" name="filter" id="all" />
                <label htmlFor="all">전체</label>
                <input type="radio" name="filter" id="complete" />
                <label htmlFor="complete">완료</label>
                <input type="radio" name="filter" id="incomplete" />
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
       
    );
}

export default IndexHeader;