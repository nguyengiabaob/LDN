import { Card, Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
const Slider = ()=>{
    const [activeCarousel,setactiveCarousel]= useState();
    const activeSub= ( active, nextActive)=>{
        console.log('active',active);
        if(nextActive !=  activeCarousel)
        {
            setactiveCarousel(nextActive);
        }
 
     }
     useEffect(()=>{
        setactiveCarousel(0);
     },[])
    //  const endSub= ( active, direction)=>{
     
    //      console.log(active)
    //      if(active != activeCarousel)
    //      {
    //          setactiveCarousel(active);
    //      }
      
    //  }
    return(
        <div style={{width:'100%', marginTop:'5px', position:'relative'}}>

     
        <Carousel
         beforeChange={activeSub}
         className="custom-carousel"
         effect="fade"
         style={{width:'100%'}}
        >
            <div>
                    <Image preview={false} height={'700px'} width='100%'  src="/Images/slide1.jpg"/>
                    <Card className={activeCarousel == 0 ?  'transfer-title active' : 'transfer-title' } style={{ width: 300, marginTop: -400, marginLeft: -40, marginBottom:'80px', backgroundColor:'#deb975'}}>
                        <p>Dự án</p>
                    </Card>
            </div>
            <div>
                <Image preview={false} height={'700px'} width='100%'  src="/Images/slide2.jpg"/>
                <Card className={activeCarousel == 1 ?  'transfer-title active' : 'transfer-title' } style={{ width: 300, marginTop: -400, marginLeft: -40, marginBottom:'80px', backgroundColor:'#deb975'}}>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                </Card>
            </div>
            <Image preview={false} height={'700px'} width='100%'  src="/Images/slide2.jpg"/>
            <Image preview={false} height={'700px'} width='100%'  src="/Images/slide3.jpg"/>
        </Carousel>
        </div>

    )
}
export default Slider