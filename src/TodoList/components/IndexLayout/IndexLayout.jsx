/** @jsxImportSource @emotion/react */
import IndexHeader from '../IndexHeader/IndexHeader';
import * as s from './styles';
import React from 'react';

function IndexLayout({children}) {
    return (
        <div css={s.layout}>
            <IndexHeader/>
            {children}
        </div>
    );
}

export default IndexLayout;