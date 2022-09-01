import React, { useEffect } from "react";
import { Image, Typography } from 'antd';
import ActivityFields from "./ActivityFields";
import SpecialConstruction from "./SpecialContruction";
import SubMain from "./SubMain";
import News from "./News";
import Slider from "../Shared/Slider";
const Home =()=>{
const {Title}= Typography;
    return (
        <>
             <Slider/>
             <div style={{marginTop:'5em', zIndex:1000}}>
        <Title className="font-title">Lĩnh vực hoạt động</Title>
        <p style={{textAlign:'center' }}>Công trình của công ty a thực hiện trên khắp cả nước luôn là những công trình nổi bật, phức tạp, đòi hỏi công nghệ xây dựng cập nhật nhất hiện nay.</p>
        <ActivityFields/>
        <SpecialConstruction/>
        <SubMain/>
        <News/>
        <div style={{position:'relative',height:'326px',marginTop:'50px'}} >
            <div className="content-fill">

            <div className="img-fill" style={{backgroundImage:'url(https://deltagroup.vn/wp-content/uploads/2020/07/DJI_0952-1-2-1.jpg)'}}>

            </div>
            <div className="overlay">

            </div>
            </div>
            <div style={{position:'relative',display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',height:'100%'}}>
                <p style={{color:'#ffff',fontSize:'45px',fontWeight:700}}>LONG ĐẠI NAM</p>
                <span style={{color:'#ffff',fontSize:'35px',fontWeight:700, marginTop:"-32px"}}>Xây dựng bằng chất lượng và đạo đức</span> 
            </div>
        </div>
    </div> 
        </>
    )
}
export default Home