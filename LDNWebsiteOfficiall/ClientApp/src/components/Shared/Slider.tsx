import { Card, Carousel, Image } from "antd";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../Service/Client";
import { getSetting } from "../../Service/ConfigService";
const Slider = ()=>{
    const [activeCarousel,setactiveCarousel]= useState<any>();
    const [ListSlider, setListSlider] = useState<any>([])
    const activeSub= ( active:any, nextActive:any)=>{
        console.log('active',active);
        if(nextActive !=  activeCarousel)
        {
            setactiveCarousel(nextActive);
        }
 
     }
     useEffect(()=>{
        setactiveCarousel(0);
     },[])
     const getListSlider= async ()=>{
        let result= await getSetting('slider');
        if(result && result.data)
        {
            console.log('dasdsadLog', result.data);
            
            setListSlider(result.data);
        }
     }
    const obj= {
        abc: 123,
        bcd: 'dsadsad',
        sdasd: 'dsadasdasdasd'
    }
    //  const endSub= ( active, direction)=>{
     
    //      console.log(active)
    //      if(active != activeCarousel)
    //      {
    //          setactiveCarousel(active);
    //      }
      
    //  }
    useEffect(() => {
      getListSlider()
    
     
    }, [])
    
    return(
        <div style={{width:'100%', marginTop:'5px', position:'relative'}}>

        {console.log('sdadasd',obj?.abc)}
        <Carousel
         beforeChange={activeSub}
         className="custom-carousel"
         effect="fade"
         style={{width:'100%'}}
        >
          {
            ListSlider.length > 0 && ListSlider.map((x:any)=>{
                return (
                    <div>
                    <Image preview={false} height={'700px'} width='100%'  src={`${baseUrl}${x?.img}`}/>
                    <Card className={activeCarousel == 0 ?  'transfer-title active' : 'transfer-title' } style={{ width: 300, marginTop: -400, marginLeft: -40, marginBottom:'80px', backgroundColor:'#deb975'}}>
                        <p>Dự án</p>
                        <p>{x?.description}</p>
                    </Card>
                    </div>
                )
            })
          }
        </Carousel>
        </div>

    )
}
export default Slider