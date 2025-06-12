/** @jsxImportSource @emotion/react */
import IndexHeader from '../IndexHeader/IndexHeader';
import * as s from './styles';
import React from 'react';

function IndexLayout({filter, setFilter, setSearchText, children}) {
    return (
        <div css={s.layout}>
            <IndexHeader filter={filter} setFilter={setFilter} setSearchText={setSearchText} />
            {children}
        </div>
    );
}

export default IndexLayout;