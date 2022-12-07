import { Card, Image, List } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Service/Client";
import { getNews, getNewsHaveImage } from "../../Service/NewsService";

const ListNews = () => {
  const [news, setNews] = useState([]);
  const naviagte = useNavigate();
  const getListNews= async()=>{
      const result = await getNewsHaveImage();
      if(result && result.data)
      {
        setNews(result.data);
      }
  }
  useEffect(() => {
    getListNews();   
  }, [])
  
  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={news}
        renderItem={(item:any) => (
          <List.Item>
            <Card>
              <Image src={`${baseUrl}${item.img}`}/>
              <div style={{paddingTop:'25px'}}>
                <span onClick={()=>{
                    naviagte(`/news/${item.id}`)
                }}>{item.title}</span>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListNews;
