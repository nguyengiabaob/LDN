import { Card, Col, Image, Row } from "antd";
import React from "react";
interface props {
   
    onclickTitle: ()=> void
}
const ItemProject = (props:props)=>{
    return (  
        <Card className="card-project" style={{   boxShadow: `0px 2px 8px 0px #63636333`, height:'250px'}}>
            <div className="header">
                <p><span style={{fontWeight:700}}> Tên chủ đầu tư:</span><span style={{marginLeft:'5px'}}>Nguyễn văn A</span></p>
                <p><span style={{fontWeight:700}}> Loại dự án: </span><span style={{marginLeft:'5px'}}>Nhà cấp 4</span></p>
            </div>
           <Row style={{paddingTop:'8px'}} gutter={32}>
            <Col span={10}>
                <div  >
                    <Image style={{borderRadius:'10px'}} width={'100%'}  height={150}  src="/Images/project1.jpg"/>
                </div>
            </Col>
            <Col span={14}>
                <p className="title-project" onClick={()=>{
                    props.onclickTitle()
                }}>
                    Dự án nhà Anh a
                </p>
                <div>
                    Đây là một ngôi nhà đẹp 
                </div>
            </Col>
           </Row>
        </Card>
    )
}
export default ItemProject