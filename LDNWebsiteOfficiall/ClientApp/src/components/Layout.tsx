import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Nav from './Shared/Nav';
import { Outlet } from 'react-router-dom'
import Footer from './Shared/Footer';
import Slider from './Shared/Slider';
const Layout = () => {
    return (
        <>
            <Nav/>
            <Outlet />
            <Footer/>
         </>
        )
}
export default Layout;