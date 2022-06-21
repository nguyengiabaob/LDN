import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Header from './Shared/Header';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
               <Header/>
              
            </React.Fragment>
        );
    }
}