import { Col, Row, Typography } from "antd";
import React, { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Card } from "reactstrap";
const SpecialConstruction = ()=> {
    const myref =  useRef<HTMLDivElement>(null);
    const [scrollTop,setScrollTop]= useState(0);
    const {Title}= Typography;
    return(
        <div className="custom-fieldTwo" >
            <Title className="font-title" style={{marginBottom:'4%'}}> Những công trình nổi bật</Title>
            <div style={{width:"80%"}}>

            <Row gutter={[{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            },
            
            {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }]} style={{marginBottom:'4%'}}>
                <Col lg={15} sm={24}  xs={24}>
                    <Card style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}} className="custom-item-card">
                        <div className="custom-layerfields">
                            <Title className="custom-twotitle" >GoldMark</Title>
                        </div>
                    </Card>
                </Col>
                <Col lg={9} sm={24}  xs={24}>
                <Card style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}} className="custom-item-card">
                        <div className="custom-layerfields">
                            <Title className="custom-twotitle" >GoldMark</Title>
                        </div>
                </Card>
                </Col>
               
            </Row>
            <Row gutter={[{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            },
            
            {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
            }
            ]}  style={{marginBottom:'4%'}}>
            <Col lg={9} sm={24}  xs={24} >
                <Card style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}} className="custom-item-card">
                        <div className="custom-layerfields">
                            <Title className="custom-twotitle" >GoldMark</Title>
                        </div>
                </Card>
            </Col>
            <Col lg={15} sm={24} xs={24} >
                    <Card style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)',}} className="custom-item-card">
                        <div className="custom-layerfields">
                            <Title className="custom-twotitle" >GoldMark</Title>
                        </div>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    )
}
export default SpecialConstruction;