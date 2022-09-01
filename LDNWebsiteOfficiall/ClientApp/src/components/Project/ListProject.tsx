import { Col, Input, List, Row, Select } from "antd";
import * as Icon from 'react-icons/all'
import React, { useState } from "react";
import ItemProject from "./ItemProject";
import ProjectDetail from "./ProjectDetail";
const ListProject = ()=>{ 
    const [visible,setVisible]= useState(false);
    const onClickTitle= ()=>{
       setVisible(true);
    }
    return (
            <div style={{marginBottom:'15px', marginTop:'20px',padding:'0px 15px'}}>
                <div style={{display:'flex', justifyContent:'space-between', paddingRight:'4px', flexWrap:'wrap'}}>
                    <Input prefix={<Icon.BsSearch name="BsSearch" size={10}/>} style={{maxWidth:'300px'}}  placeholder="Nhập tên dự án"/>
                    <Select style={{width:'300px'}} placeholder="Chọn loại dự án"></Select>
                </div>
                <div style={{padding:'0 25px', marginTop:'25px'}}>
                  <Row gutter={[16,16]}>
                    <Col lg= {12} md={24}>
                        <ItemProject onclickTitle={onClickTitle}/>
                    </Col>
                    <Col lg= {12} md={24}>
                    <ItemProject onclickTitle={onClickTitle}/>
                    </Col>
                    <Col lg= {12} md={24}>
                        <ItemProject onclickTitle={onClickTitle}/>
                    </Col>
                    <Col lg= {12} md={24}>
                    <ItemProject onclickTitle={onClickTitle}/>
                    </Col>
                  </Row>
                </div>
                <ProjectDetail visible={visible} onVisivle={setVisible}/>
            </div>
    ) 
}
export default ListProject; 