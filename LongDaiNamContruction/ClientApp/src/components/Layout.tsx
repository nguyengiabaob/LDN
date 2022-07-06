import * as React from 'react';
import { Container } from 'reactstrap';
import Home from './Home/Home';

import NavMenu from './NavMenu';
import Header from './Shared/Header';
import Nav from './Shared/Nav';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <Nav/>
                <Header />
                <Home/>
            </React.Fragment>
        );
    }
}