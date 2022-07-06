import React from "react";
import { Typography } from 'antd';
import '../../Style/CustomStyle.scss';
import ActivityFields from "./ActivityFields";
import SpecialConstruction from "./SpecialContruction";
import SubMain from "./SubMain";

const Home =()=>{
const {Title}= Typography;
    return (
    <div style={{marginTop:'5em', zIndex:1000}}>
        <Title className="font-title">Lĩnh vực hoạt động</Title>
        <p style={{textAlign:'center' }}>Công trình của công ty thực hiện trên khắp cả nước luôn là những công trình nổi bật, phức tạp, đòi hỏi công nghệ xây dựng cập nhật nhất hiện nay.</p>
        <ActivityFields/>
        <SpecialConstruction/>
        <SubMain/>
    </div> 
    )
}
export default Home