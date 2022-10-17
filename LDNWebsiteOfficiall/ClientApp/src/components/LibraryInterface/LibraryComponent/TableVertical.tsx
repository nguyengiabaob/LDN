import React from 'react'
type datasource ={
   title:string,
   dataIndex:string,
   key: string| number,
   render?: (text:any, record:any, index:any)=>React.ReactNode  
}
interface props {
   columns : datasource []
   datasource: any []
}
const TableVertical= (props:props)=>{
const getObjectValue= (dataIndex:string)=>{
   if(props.datasource.length>0){
      let a = props.datasource.find(x=> Object.keys(x).includes(dataIndex))
      if(a)
      {
         return a;
      }
  }
  return undefined
}
   return(
   <div>
      <table style={{width:'100%'}}>
         {
            props.columns.length > 0 ? 
            props.columns.map((col, index)=>{
               let obj = getObjectValue(col.dataIndex)
               return (
                  <tr style={{backgroundColor: index%2 ==0 ? '#f9f9f9' : '#FFFF'}}>
                       <td className='ldn-table'>
                           <span>
                                    {
                                    col.title
                                    }
                           </span>
                     </td>
                     <td className='ldn-table'>
                        {
                           col.render ?  col.render(obj[col.dataIndex],obj ,index) :<span>dasdasdsa</span>
                        }
                     </td>
                  </tr>
               )
            })
                
          : <span> No Data</span>
         }
      </table>
   </div>
   )
}
export default TableVertical;