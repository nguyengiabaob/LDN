import * as React from 'react';
// import { Route } from 'react-router';
import Layout from './components/Layout';

import Counter from './components/Counter';
import FetchData from './components/FetchData';
import 'antd/dist/antd.css'
import './custom.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Backend from '../src/components/Back-end/src/App'
import Home from './components/Home/Home';
import DefaultLayout from './components/Back-end/src/layout/DefaultLayout';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home />}>

                </Route>
            </Route>
            <Route path='/Admin/*' element={<Backend/>}>
                    
            </Route>
        </Routes>
    </BrowserRouter>
);
