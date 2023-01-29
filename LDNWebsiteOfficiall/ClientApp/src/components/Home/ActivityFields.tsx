import { Card, Carousel, Typography } from "antd";
import React, { useEffect, useState } from "react";
import '../../Style/CustomStyle.scss';
const ActivityFields = ()=>{
const {Title}= Typography;
const [ListActivityFields, setListActivityFields] = useState();
const getActivityFields= ()=>{
     
}
    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
    return (
        <Carousel
           
            className="custom-carousel-home"
        >
            <div className="custom-carouselfield">

                <Card className="custom-itemfields" style={{height: '350px', position:'relative'}}>
              
                <div className="custom-fieldImage" style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}}>
                        
                </div>
                <div className="custom-backgroundlayer">
                    <Title className="custom-font-title">Tổng Thầu</Title>
                </div>
                </Card> 


                <Card className="custom-itemfields" style={{height: '350px', position:'relative'}}>
              
                <div className="custom-fieldImage" style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}}>
                        
                </div>
                <div className="custom-backgroundlayer">
                    <Title className="custom-font-title">Tư Vấn Thiết Kế</Title>
                </div>
                </Card> 


                <Card className="custom-itemfields" style={{height: '350px', position:'relative'}}>
              
              <div className="custom-fieldImage" style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}}>
                      
              </div>
              <div className="custom-backgroundlayer">
                  <Title className="custom-font-title">Tư vấn xây dựng</Title>
              </div>
              </Card> 

              <Card className="custom-itemfields" style={{height: '350px', position:'relative'}}>
              
              <div className="custom-fieldImage" style={{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/ee1-1.jpg)'}}>
                      
              </div>
              <div className="custom-backgroundlayer">
                  <Title className="custom-font-title">Vật liệu xây dựng</Title>
              </div>
              </Card> 
                     
            </div>
            <div className="custom-carouselfield">
                <Card className="custom-itemfields">
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card className="custom-itemfields">
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card className="custom-itemfields">
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card className="custom-itemfields">
                    <Title>Tổng Thầu</Title>
                </Card> 
                     
            </div>
        </Carousel>
    )
}
export default ActivityFields;