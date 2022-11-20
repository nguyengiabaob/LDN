import { Card, Col, Image, Row } from "antd";
import React from "react";
import { baseUrl } from "../../Service/Client";
interface props {
    ProjectData:any,
    onclickTitle: ()=> void
}
const ItemProject = (props:props)=>{
    return (  
        <>
        {props.ProjectData && 
            <Card className="card-project" style={{   boxShadow: `0px 2px 8px 0px #63636333`, height:'250px'}}>
            <div className="header">
                <p><span style={{fontWeight:700}}> Tên chủ đầu tư:</span><span style={{marginLeft:'5px'}}>Nguyễn văn A</span></p>
                <p><span style={{fontWeight:700}}> Loại dự án: </span><span style={{marginLeft:'5px'}}>Nhà cấp 4</span></p>
            </div>
           <Row style={{paddingTop:'8px'}} gutter={32}> 
            <Col span={10}>
                <div  >
                  { props.ProjectData  &&  <Image style={{borderRadius:'10px'}} width={'60%'}  height={150}  src={props.ProjectData?.newPath ? props.ProjectData?.newPath : "" }/> }
                </div>
            </Col>
            <Col span={14}>
                <p className="title-project" onClick={()=>{
                    props.onclickTitle()
                }}>
                  { props.ProjectData && props.ProjectData.name}
                </p>
                <div>
                { props.ProjectData && props.ProjectData.description  }
                </div>
            </Col>
           </Row>
        </Card>
        }
        </>
    )
}
export default ItemProject;