import { Button, Col, Row, Space, Typography } from "antd";
import * as ReactIcons from 'react-icons/all'
import React, { CanvasHTMLAttributes, useEffect, useRef } from "react";
const Footer = () => {
const {Title}= Typography;
    return(
        <footer>
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center' , flexDirection:'column',paddingTop:'2em', borderTopWidth:'0.5px', borderTopColor:'#d5d5d5',borderTopStyle:'solid',paddingBottom:'4em'}}>
                <div style={{width:'80%'}}>
                    <Row>
                        <Col style={{paddingBottom:'4em',display:'flex', flexDirection:'column', alignItems:'center'}} lg={6}>
                            <Title style={{textAlign:'center', fontSize:'1.5em' }}>Giới thiệu</Title>
                            <div style={{width:'80%'}}>   
                                <p>
                                Công Ty TNHH Tập Đoàn Xây Dựng DELTA được thành lập năm 1993. 
                                Là đơn vị hàng đầu trong ngành xây dựng Việt Nam
                                </p>
                            </div>
                          
                            {/* <Space>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="link">Link</Button>
                            </Space> */}
                        </Col>
                        <Col lg={6} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <Title style={{textAlign:'center', fontSize:'1.5em' }}>Mạng xã hội</Title>
                            <div style={{display: 'flex', flexDirection:'column', alignItems:'center' }}>
                                <Space className="custom-space">
                                    <span className="border-radius-icon" id="iconfacebook">
                                            <ReactIcons.GrFacebookOption color="#9c9c9c" size={17}/>
                                    </span>
                                    <span style={{color:'#9c9c9c'}}>
                                        Facebook
                                    </span>
                                </Space>
                                <Space className="custom-space"  >
                                    <span className="border-radius-icon" id="iconyoutube">
                                            <ReactIcons.GrYoutube color="#9c9c9c" size={17}/>
                                    </span>
                                    <span style={{color:'#9c9c9c'}}>
                                       Youtube
                                    </span>
                                </Space>
                                <Space className="custom-space">
                                    <span className="border-radius-icon" id="iconinstagram">
                                            <ReactIcons.GrInstagram color="#9c9c9c" size={17}/>
                                    </span>
                                    <span style={{color:'#9c9c9c'}}>
                                        Instagram
                                    </span>
                                </Space>
                                <Space className="custom-space">
                                    <span className="border-radius-icon" id="icontiktok">
                                            <ReactIcons.TbBrandTiktok color="#9c9c9c" size={17}/>
                                    </span>
                                    <span style={{color:'#9c9c9c'}}>
                                        Tiktok
                                    </span>
                                </Space>
                                

                            </div>
                        </Col>
                        <Col lg={6} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <Title style={{textAlign:'center', fontSize:'1.5em' }}>Địa chỉ</Title>
                            <div style={{width:'80%'}}>
                                Điạ chỉ: 81 Phố Lạc Trung, Quận Hai Bà Trưng, Hà Nội.
                                    ĐT: +84(24) 3821 7885
                                    Fax: +84(24) 3976 0988
                                    Email: info@deltagroup.vn
                            </div>
                        </Col>
                        <Col lg={6} style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                            <Title style={{textAlign:'center', fontSize:'1.5em' }}>Bản đồ</Title>
                            <div style={{width:'80%'}}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.074987011816!2d106.64092014999999!3d10.999651799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c944cdafb09ce06!2zQ8OUTkcgVFkgVE5ISCBUSEnhur5UIEvhur4gWMOCWSBE4buwTkcgTE9ORyDEkOG6oEkgTkFN!5e0!3m2!1svi!2s!4v1658055143287!5m2!1svi!2s"  height="200" style={{border:0}}></iframe>
                            </div>
                        </Col>
                    </Row>
                </div>
                </div>
            <div style={{backgroundColor:'#c59b51', padding:'15px 0px', display:'flex', justifyContent:'center',alignItems:'center',color:'#FFFF',fontWeight:700}}>
                <Row style={{width:'80%', padding:'22px 0px 22px 0px'}}>
                    <Col  lg ={8}>
                        <div>
                        Hotline: +84(24) 3821 7885
                        </div>

                    </Col>
                    <Col lg ={8} style={{display:'flex', justifyContent:'center'}}>
                        <div>
                        Copyright © 2020 DeltaGroup | All rights reserved
                                Thiết kế và vận hành bởi Bao
                        </div>

                    </Col>
                    <Col lg ={8}  style={{display:'flex', justifyContent:'flex-end'}} >
                        <div >
                        Hotline: +84(24) 3821 7885
                        </div>

                    </Col>
                </Row>
            </div> 
          
        </footer>
    
    )
}
export default Footer