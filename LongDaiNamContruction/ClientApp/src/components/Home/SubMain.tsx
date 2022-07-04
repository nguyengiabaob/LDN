import { Button, Card, Col, Image, Row, Typography } from "antd";
import '../../Style/CustomStyle.scss'
import React from "react";
const SubMain = ()=>{
const {Title}= Typography; 
    return(
      <div style={{position:'relative',marginTop:'2em'}} className="res-Image">
          
            <div style= {{backgroundImage: 'url(https://deltagroup.vn/wp-content/uploads/2020/07/18216686_1417437778321522_1758129339191944561_o-1-1.jpg)', backgroundSize:'cover', backgroundRepeat:'no-repeat'
            , position:'absolute', width:'100%',backgroundAttachment:'fixed'}} className="res-Image"
            >
                
                 <div style= {{ width:'100%',height:'100%', position:'absolute', backgroundColor:'rgba(22, 22, 22, 0.87)'}}>

                </div> 
            </div>
            <div style={{ width:'100%', display:'flex', justifyContent:'center', alignItems:'center',height:'100%',alignSelf: 'center'}}>
                 <Row gutter={[{
                     xs: 8,
                     sm: 16,
                     md: 24,
                     lg: 32,

                 },{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                 }]}>
                    <Col lg={12} xs={24} style={{display:'flex', justifyContent:'center'}}>
                        <Image height={'396px'} src="Images/backgroundImage2.jpg" preview ={false} width='80%' />
                    </Col>
                    <Col lg={12} xs={24} id='col-Fields' >
                        <Title style={{color:'#FFFF',textAlign:'center'}}>Hợp tác cùng LDN</Title>
                        <p  style={{color:'#FFFF'}}>
                        Chúng tôi liên kết với rất nhiều các đối tác trong cả nước, tận dụng hiệu quả mạng lưới các nhà cung ứng, thầu phụ chuyên môn cao để đạt được mục tiêu công việc một cách hiệu quả nhất.
                        </p>
                        <p  style={{color:'#FFFF'}}>
                        DELTA mong muốn xây dựng những mối quan hệ hợp tác chiến lược để cùng nhau tiến xa hơn, tiến mạnh mẽ hơn. Hãy nhanh chóng tham gia cùng với chúng tôi !
                        </p>
                        <Row gutter={[{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,

                        },{
                            xs: 8,
                            sm: 16,
                            md: 24,
                            lg: 32,
                        }]}>
                        <Col lg={12} xs={12}>
                            <Button style={{width:'100%', borderRadius:'4%',backgroundColor:'#FFFF',color:'#000000'}}  type="primary">Liên hệ LDN</Button>
                        </Col>
                        <Col  lg={ 12} xs={12}>
                            <Button style={{borderRadius:'4%', backgroundColor:'#FFFF',color:'#000000'}} type="primary">Liên hệ LDN</Button>
                        </Col>
                    </Row>
                    </Col >
                   
                 </Row>
            {/* <div style={{position:'absolute'}}>
                    <Row >
                        <Col lg={12}>
                            <Image src="Images/backgroundImage2.jpg"/>
                        </Col>


                        <Col lg={12}>


                        </Col>
                    </Row>
            </div>
        */}
       </div>
       </div>

    )

}
export default SubMain ;