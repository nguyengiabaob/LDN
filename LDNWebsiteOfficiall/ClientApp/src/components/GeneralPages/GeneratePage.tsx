import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { getNewsDetail } from '../../Service/NewsService';
import { getPagesById } from '../../Service/PageService'
interface props {
    id?:any,
    type: string
    
}
const  GeneratePage =(props: props) => {
 const {id} = useParams();
 const [Page, setPage] = useState<any>();
 const getPage= (idData:any)=>{
    if(props.type=="menu"&& props.id)
    {
      getPagesById(idData).then((res)=>{
        if(res.data)
        {
          console.log(res.data)
            setPage(res.data)
        }
    })
    .catch(e=>{
        
    })
    }
    if(props.type=="news" && id)
    {
      getNewsDetail(id).then((res)=>{
        if(res.data)
        {
          console.log(res.data)
            setPage(res.data)
        }
    })
    .catch(e=>{
        
    })
    }
 }
 useEffect(() => {
  console.log(props.id);
   getPage(props.id);
 }, [props.id,id])
 
  return (
    <div className='dynamicPage'>
      {console.log('dsadsadsad',  Page?.pageContent)
      }
    <div dangerouslySetInnerHTML={{__html: Page?.pageContent}}>
   
    </div>
    </div>
  )
}

export default GeneratePage