import React from "react";
import { Typography } from 'antd';
import '../../Style/CustomStyle.scss';
import ActivityFields from "./ActivityFields";
const Home =()=>{
const {Title}= Typography;
    return (
    <div>
        <Title className="font-title">Lĩnh vực hoạt động</Title>
        <p style={{position:'absolute', left: '25%', }}>Công trình của công ty thực hiện trên khắp cả nước luôn là những công trình nổi bật, phức tạp, đòi hỏi công nghệ xây dựng cập nhật nhất hiện nay.</p>
        <ActivityFields/>
    </div> 
    )
}
export default Home