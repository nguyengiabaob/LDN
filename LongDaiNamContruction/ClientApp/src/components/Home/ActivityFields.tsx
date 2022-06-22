import { Card, Carousel, Typography } from "antd";
import React from "react";
const ActivityFields = ()=>{
const {Title}= Typography;
    return (
        <Carousel
            dotPosition="bottom"
        >
            <div style={{
                display:'flex',
                justifyContent:'center',

            }}>
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card>       
            </div>
            <div style={{
                display:'flex',
                justifyContent:'center',

            }}>
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card> 
                <Card>
                    <Title>Tổng Thầu</Title>
                </Card>       
            </div>
        </Carousel>
    )
}