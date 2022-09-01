import * as React from 'react';
// import { Route } from 'react-router';
import Layout from './components/Layout';

import Counter from './components/Counter';
import FetchData from './components/FetchData';
import 'antd/dist/antd.css'
import './custom.css'
import './Style/CustomStyle.scss'
import './Style/App.scss'
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Backend from '../src/components/Back-end/src/App'
import Home from './components/Home/Home';
import DefaultLayout from './components/Back-end/src/layout/DefaultLayout';
import Introdcution from './components/Introduction/Introduction';
import ListProject from './components/Project/ListProject';
export default () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home />}>

                </Route>
                <Route path='/introduction' element={<Introdcution />}>

                </Route>
                <Route path='/project' element={<ListProject />}>

                </Route>
            </Route>
            <Route path='/LDN/admin/*' element={<Backend/>}>
                    
            </Route>
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    </BrowserRouter>
);
