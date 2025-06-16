import React from 'react';
import RootLayout from '../RootLayout/RootLayout';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import UnAuthRouter from './UnAuthRouter';
import AuthRouter from './AuthRouter';
import NotFound from '../NotFound/NotFound';
import RootHeader from '../RootHeader/RootHeader';

function MainRouter(props) {
    return (
        <RootLayout>
                <RootHeader />
            <Routes>
                <Route path='' element={<Home />} />
                <Route path='/auth/*' element={<AuthRouter />}/>
                <Route path='/users/*' element={<UnAuthRouter />}/>
                <Route path='*' element={<NotFound />}/>    // 모든 라우트에 notfound
            </Routes>
        </RootLayout>
    );
}

export default MainRouter;