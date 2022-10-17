import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getPagesById } from '../../Service/PageService'
interface props {
    id:any
}
const  GeneratePage =(props: props) => {

 const [Page, setPage] = useState<any>();
 const getPage= (id:any)=>{
    getPagesById(id).then((res)=>{
        if(res.data)
        {
          console.log(res.data)
            setPage(res.data)
        }
    })
    .catch(e=>{
        
    })
 }
 useEffect(() => {
  console.log(props.id);
   getPage(props.id);
 }, [props.id])
 
  return (
    <div className='dynamicPage'>
    {/* <div dangerouslySetInnerHTML={{__html: Page?.pageContent}}>
   
    </div> */}
    </div>
  )
}

export default GeneratePage