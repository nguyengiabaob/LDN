import React, { Component } from 'react'
import { BrowserRouter, HashRouter, Route, Routes, Switch } from 'react-router-dom'
import './scss/style.scss'
import 'antd/dist/antd.css';
import DefaultLayout from './layout/DefaultLayout';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// // Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    console.log('123123123');
    return (
         <React.Suspense fallback={loading}>
           <Routes>
            <Route  path="/"  element={<DefaultLayout/>} /> 
            <Route  path="/login" name="Login Page" element={<Login/>} />
            <Route
             
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
                <Route  path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
                <Route  path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
                
            </Routes>           
       </React.Suspense>
    )
  }
}

export default App
