import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";
const Footer =()=>{
const {Title}= Typography;
    return(
        <>
        <div>
            <Row>
                <Col>
                    <Title>Giới thiệu</Title>
                    <p>
                    Công Ty TNHH Tập Đoàn Xây Dựng DELTA được thành lập năm 1993. 
                    Là đơn vị hàng đầu trong ngành xây dựng Việt Nam
                    </p>
                    <Space>
                        <Button type="primary">Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="link">Link</Button>
                    </Space>
                </Col>
                <Col>
                    <Title>Liên kết</Title>
                </Col>
                <Col>
                    <Title>Địa chỉ</Title>
                </Col>
                <Col>
                    <Title>Bản đồ</Title>
                </Col>
            </Row>
        </div>
        <div>
            <Row>
                <Col>
                    <div>
                    Hotline: +84(24) 3821 7885
                    </div>

                </Col>
                <Col>
                    <div>
                    Hotline: +84(24) 3821 7885
                    </div>

                </Col>
                <Col>
                    <div>
                    Hotline: +84(24) 3821 7885
                    </div>

                </Col>
            </Row>

        </div>
        </>
    )
}
export default Footer