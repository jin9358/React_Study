/** @jsxImportSource @emotion/react */
import { IoSearch } from 'react-icons/io5';
import * as s from './styles';
import React, { useState } from 'react';

function IndexHeader({filter, setFilter, setSearchText}) {

    const [ searchInputValue, setSearchInputValue ] = useState("");

    const handleSearchInputOnChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    const handleSearchInputOnKeyDown = (e) => {
        if (e.keyCode !== 13) {
            return;
        }
        setSearchText(searchInputValue);
    }

    const handleSearchButtonOnClick = (e) => {
        setSearchText(searchInputValue);
    }

    const handleFilterOnChange = (e) => {
        setFilter(e.target.id);
    }

    return (
        <>
            <div css={s.container}>
                <input css={s.searchInput} type="text" value={searchInputValue} onChange={handleSearchInputOnChange} onKeyDown={handleSearchInputOnKeyDown} />
                <button css={s.searchButton} onClick={handleSearchButtonOnClick} ><IoSearch /></button>
            </div>
            <div css={s.filterContainer}>
                <input type="radio" name="filter" id="all" checked={filter === "all"} onChange={handleFilterOnChange} />
                <label htmlFor="all">전체</label>
                <input type="radio" name="filter" id="complete" checked={filter === "complete"} onChange={handleFilterOnChange} />
                <label htmlFor="complete">완료</label>
                <input type="radio" name="filter" id="incomplete" checked={filter === "incomplete"} onChange={handleFilterOnChange} />
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    )
}

export default IndexHeader;