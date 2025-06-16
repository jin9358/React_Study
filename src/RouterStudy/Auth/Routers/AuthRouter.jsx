import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mypage from '../Mypage/Mypage';
import NotFound from '../NotFound/NotFound';

function AuthRouter(props) {
    return (
        <Routes>
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default AuthRouter;