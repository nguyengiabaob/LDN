import { fontSize } from "@mui/system";
import { Card, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getSetting } from "../../Service/ConfigService";
interface props {}
const Introdcution = (props: props) => {
  const [contentData, setContentData] = useState();
  useEffect(() => {
   const a = async () => {
     let intro =  await getSetting("introduction");
     if(intro && intro?.data)
     {
      let data = JSON.parse(intro.data?.[0]?.data)
      console.log('dsadasdsad', data);
      
      setContentData(data)
     }
    }
  a();
  
  }, [])
  

  return (
    <div>
      <div className="header-intro">
        <span
          className="title-page"
          style={{ fontSize: "200%", color: "#FFFF", fontWeight: 700 }}
        >
          Long Đại Nam
        </span>
        <div>
          <span
            style={{
              fontSize: "120%",
              color: "#FFFF",
              fontStyle: "oblique",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {contentData?.["Paragraph 1"]? contentData?.["Paragraph 1"] :  "" }
            {/* Nguồn nhân lực là giá trị cốt lõi và là nền tảng vững chắc giúp Long
            Đại Nam không ngừng tạo nên những giá trị gia tăng hiệu quả cho
            khách hàng. */}
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "-80px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card className="container-generalIntro">
          <span style={{ fontSize: "180%", color: "#FFFF", fontWeight: 700 }}>
            Giới thiệu chung
          </span>
          <div
            style={{
              marginTop: "2% ",
              fontWeight: "500",
              fontSize: "100%",
              color: "#FFFF",
            }}
          >
            {contentData?.["Paragraph 2"]? contentData?.["Paragraph 1"] :  ""}
            {/* DELTA được thành lập năm 1993, chuyên nhận thầu thi công các công
            trình xây dựng dân dụng, công nghiệp, các công trình có yêu cầu cao
            về chất lượng, kỹ thuật và mỹ thuật như khách sạn, tổ hợp nhà văn
            phòng, nhà ở cao cấp, các công trình hạ tầng khu công nghiệp, giao
            thông…. Trải qua 28 năm xây dựng và phát triển, DELTA đã trở thành
            Tập đoàn Xây dựng lớn mạnh với 12 công ty thành viên, 2500 cán bộ kỹ
            sư, kiến trúc sư và hệ thống thiết bị máy móc đồng bộ, hiện đại. */}
          </div>
        </Card>
      </div>
      <div
        style={{
          padding: "0px 40px",
          width: "100%",
          marginTop: "48px",
          border: "8px",
        }}
      >
        <Card style={{ borderRadius: "8px" }}>
          <Row gutter={[16, 16]}>
            <Col lg={8}>
              <Image preview={false} src="/Images/historybackground.jpg" />
            </Col>
            <Col lg={16}>
              <p
                style={{ fontSize: "200%", color: "#deb975", fontWeight: 700 }}
              >
                Các mốc lịch sử
              </p>
              <div style={{ width: "100%" }}>
                <span
                  style={{
                    marginTop: "2% ",
                    fontWeight: "500",
                    fontSize: "100%",
                    wordBreak: "break-word",
                    // color: "#FFFF",
                  }}
                >
                    {contentData?.["Paragraph 3"]? contentData?.["Paragraph 3"] :  ""}
                  {/* Hơn hai mươi năm trước, DELTA đã đi những bước đầu tiên chập
                  chững khi đất nước bước vào thời kỳ đổi mới. Và giờ đây, những
                  bước chân ấy đã in dấu lên khắp dải đất hình chữ S, nhưng với
                  một tâm thế, một dáng hình khác – vững chãi và mạnh mẽ hơn bao
                  giờ hết. Những thành công ấy là kết quả của định hướng đúng
                  đắn mà chủ tịch hội đồng thành viên Trần Nhật Thành theo đuổi
                  từ những ngày đầu thành lập. Đó là lấy chữ Tín, chữ Tâm làm
                  đầu – lương tâm trong nghề nghiệp và tri thức trong công việc. */}
                </span>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <div style={{marginTop:'25px',  padding: "0px 40px",}}>
        <Row>
          <Col  lg={14}>
            <p style={{ fontSize: "200%", color: "#deb975", fontWeight: 700 }}>
              Đội ngũ lãnh đạo
            </p>
            <div style={{ width: "100%" }}>
              <span
                style={{
                  marginTop: "2% ",
                  fontWeight: "500",
                  fontSize: "100%",
                  wordBreak: "break-word",
                  // color: "#FFFF",
                }}
              >
                {contentData?.["Paragraph 4"]? contentData?.["Paragraph 4"] :  ""}
                {/* DELTA hội tụ những người có kiến thức chuyên ngành giỏi, các
                chuyên gia uy tín trong ngành xây dựng. Với cương vị là chủ tịch
                công ty (vừa là thầy giáo Khoa Xây dựng – Trường ĐHXD Hà Nội),
                thầy giáo Trần Nhật Thành đã tập hợp được một đội ngũ nhân sự
                chất lượng cao. Họ là những trí thức có đạo đức trong kinh doanh
                và cuộc sống, giàu đam mê và có năng lực chuyên môn cao.Trên
                bước đường phát triển của mình, đội ngũ lãnh đạo của DELTA luôn
                đi đầu, là những người tạo cảm hứng cho sự phấn đấu của toàn bộ
                cán bộ công nhân viên. Điều đó giúp cho DELTA vượt qua những
                thách thức và phát triển vững mạnh. Đội ngũ lãnh đạo của DELTA
                hiện nay là sự kết hợp hài hòa của kiến thức kinh nghiệm lâu năm
                và sự năng động nhiệt huyết của tuổi trẻ. Họ là những người phát
                triển những hướng kinh doanh mới và áp dụng các công cụ quản trị
                tiên tiến cho DELTA. */}
              </span>
            </div>
          </Col>
          <Col lg={10}>
                <Image src="/Images/backgroundEmployee.jpg"/>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Introdcution;
