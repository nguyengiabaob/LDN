import { Button, Image, Modal } from 'antd';
import React from 'react'
interface props {
    visible: boolean,
    onVisivle: (value:any)=> void
}
const ProjectDetail = (props:props)=>{
    const onCancel= ()=>{
        props.onVisivle(false);
    }
    return (
        <Modal width={"80%"} visible={props.visible} centered footer={
            <Button onClick={()=>{
                onCancel()
            }} >
                Thoát 
            </Button>
        }
        
        >
         <div>
            <Image width={'100%'} height={250} src="/Images/project1.jpg" />
         </div>

        </Modal>
    )
}
export default ProjectDetail;
