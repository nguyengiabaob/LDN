import * as React from 'react';
// import { Route } from 'react-router';
import Layout from './components/Layout';

import Counter from './components/Counter';
import FetchData from './components/FetchData';
import 'antd/dist/antd.css'
import './custom.css'
import './Style/CustomStyle.scss'
import './Style/App.scss'
import '../src/components/Back-end/src/scss/style.scss'
import { BrowserRouter, Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Backend from '../src/components/Back-end/src/App'
import Home from './components/Home/Home';
import DefaultLayout from './components/Back-end/src/layout/DefaultLayout';
import Introdcution from './components/Introduction/Introduction';
import ListProject from './components/Project/ListProject';
import { getMenusWithUrl } from './Service/MenuService';
const App = () => {
    const [Menus, setMenus] = React.useState<any>([]);
    const getMenus= ()=>{
        getMenusWithUrl().then((res)=>{
            if(res.data && res.data.length>0)
            {
                let newData:any []= [];
                res.data.forEach((x:any)=>{
                    let item ={
                        pageContent: x.pageContent,
                        pagesId: x.pagesId,
                        id: x.id,
                        url : x.url,
                        component: React.lazy(()=>import(`./components`+ x.component)),
                    }
                    newData.push(item);
                })
                setMenus(newData);
            }
                
        })
    }
    React.useEffect(() => {
      
        getMenus();
     
    }, [])
   
    // const RendertComponent =( name:any)=>{
    //     let Tag = name;
    //     return (
    //       React.createElement(Tag,{})
    //     )
    // }
    const loading = (
        <div className="pt-3 text-center">
          <div className="sk-spinner sk-spinner-pulse"></div>
        </div>
      );
    return (
        <BrowserRouter>
         <React.Suspense fallback={loading}>
            <Routes>
                <Route element={<Layout/>}>
                <Route path='/' element={<Home />}></Route>
                    {
                        
                        
                       Menus && Menus.length > 0 && Menus.filter((x:any)=>x.component!=null).map((x:any)=>{
            
                            // let A= React.lazy(() => import(`./components`+ x.component));
                            console.log('dsadsa',x);
                           return (
                            x.component && <Route path={x.url} element={x.pageContent ?  <x.component id={x.pagesId}/>  : <x.component/>} />
                         

                           );
                        })
                    }
                    {/* <Route path='/' element={<Home />}>
    
                    </Route>
                    <Route path='/introduction' element={<Introdcution />}>
    
                    </Route>
                    <Route path='/project' element={<ListProject />}>
    
                    </Route> */}
                </Route>
               
                <Route path='/LDN/admin/*' element={<Backend/>}>
                        
                </Route>
                
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            </React.Suspense>
        </BrowserRouter>
    );
}
export default App;
