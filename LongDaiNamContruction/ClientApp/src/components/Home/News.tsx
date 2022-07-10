import { Button, Card, Col, Image, Row, Space, Typography } from "antd";
import React from "react";
const News = ()=>{
    const {Title}= Typography
    return (
        <div>
            <Title className="font-title" >Tin tức</Title>
            <p style={{textAlign:'center' }}>Cập nhật những thông tin mới nhất</p>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Row style={{width:'80%', justifyContent:'center'}} gutter={[4,8]}>
                    <Col lg={5} md={24} sm={24} xs={24}>
                        <div>
                            <Image   preview={false} src="Images/backgroundImage2.jpg" width='100%' height="300px"/>
                            {/* <Card className="description-Img" style={{position:'relative'}}>
                                <p>description</p>
                            </Card> */}
                        </div>
                    </Col>
                    <Col lg={12} md={24} sm={24} xs={24}>
                        <div style={{width:'100%',position:'relative'}} className="Image-news">
                            <Image  style={{position:'relative'}} preview={false} src="Images/backgroundImage2.jpg" width='100%' height="300px"/>
                            <Card className="description-Img" style={{overflow:'hidden',display:'block'}}>
                                <p>description</p>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={5} md={24} sm={24} xs={24}>
                        <div>
                            <Image  preview={false} src="Images/backgroundImage2.jpg" width='100%' height="300px"/>
                            {/* <Card className="description-Img" style={{position:'relative'}}>
                                <p>description</p>
                            </Card> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default News 