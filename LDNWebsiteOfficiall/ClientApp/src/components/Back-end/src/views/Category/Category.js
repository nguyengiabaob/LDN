import React, { useEffect } from "react";
import {CCard, CCardBody, CCardHeader, CCardText, CCardTitle, CCol, CRow} from '@coreui/react'
// import CategoriesService from "../../../../Data/Service/CategoriesService";
import { useSelector } from "react-redux";
import { Table} from 'antd';
 const Category =()=>{
    const [loading, setLoading] = React.useState(false);
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
    const [dataCatergory, setCatergory] = React.useState([]);
    // const GetNameParentMenu = (id, MenuArray)=>{
    //    let a =  MenuArray.find(i=> i.id==id);
    //     return a.nameCategory;
    // }
    // let menu = useSelector(state=>state.Menu);
    // useEffect(()=>{
    //     let b= [];
    //      if(menu)
    // {
    //   menu.forEach((v,i)=>{
    //     console.log(i); 
    //     if(v.parentMenu)
    //     {
    //         v={
    //             ...v,
    //             STT: i+1,
    //             parentName: GetNameParentMenu(v.parentMenu,menu),
    
    //         }
    //         console.log(v);
    //     }
    //     else{
    //         v={
    //             ...v,
    //             STT: i+1,
    
    //         }
    //     }
    //     b.push(v);
    //   })
    //   console.log(b);
    //   setCatergory(b);
        
    // }
    // },[menu])
    const colData= [
        {
            title: 'STT',
            dataIndex: 'STT',
            key: 'STT',
          },
        {
            title: 'Name',
            dataIndex: 'nameCategory',
            key: 'nameCategory',
          },
          {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
          },
          {
            title: 'File Folder',
            dataIndex: 'fileFolder',
            key: 'fileFolder',
          },
          {
            title: 'Parent Menu',
            dataIndex: 'parentName',
            key: 'parentName',
          },
    ]
    return (
      <></>
      //   <CRow>
      //   <CCol xl={12}>
      //   <CCard>
      //   <CCardHeader class ="text-center" style={{fontWeight:700, fontSize:25, marginBottom:15}}>Danh sách Danh mục</CCardHeader>
      //   <CCardBody>
      //       <Table dataSource={dataCatergory} columns={colData}/>
      //   </CCardBody>
      //  </CCard>
      // </CCol>
      //  </CRow>
    )
}
export default Category;