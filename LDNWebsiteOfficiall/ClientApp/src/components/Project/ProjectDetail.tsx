import { Button, Image, Modal, Space, Table, Tabs, Tag } from 'antd';
import React from 'react'
import { LDNLibrary } from '../LibraryInterface/LDNInterface';
import TableVertical from '../LibraryInterface/LibraryComponent/TableVertical';
interface props {
    // visible: boolean,
    // onVisivle: (value:any)=> void
}
const ProjectDetail = (props:props)=>{
    const columns = [
        {
          title: 'Tên dự án',
          dataIndex: 'name',
          key: 'name',
          render: (text:any) => <a>{text}</a>,
        },
        {
          title: 'Chủ đầu tư',
          dataIndex: 'Author',
          key: 'Author',
          render: (text:any) => <a>{text}</a>,
        },
        {
          title: 'Giá trị',
          dataIndex: 'value',
          key: 'value',
          render:(text:any) => <a>{text}</a>,
        },
        {
          title: 'Gói thầu',
          dataIndex: 'package',
          key: 'package',
          render: (text:any) => <a>{text}</a>,
        },
        {
          title: 'Khởi công',
          dataIndex: 'startdate',
          key: 'startdate',
          render: (text:any) => <a>{text}</a>,
        },
        {
          title: 'Địa điểm',
          dataIndex: 'address',
          key: 'address',
          render: (text:any) => <a>{text}</a>,
        },
      ];
    const dataSource = [
      {
        name : 'Khu đô thị sinh thái, du lịch, nghỉ dưỡng và sân golf Phú Thọ',
        Author: 'T&T Group',
        value : 'tỷ',
        package: 'Tổng thầu thi công',
        startdate: '22/02/2022',
        address: 'Huyện Tam Nông, tỉnh Phú Thọ'

      }
    ]
    const {TabPane}= Tabs
    // const onCancel= ()=>{
    //     props.onVisivle(false);
    // }
    return (
        // <Modal title="Chi tiết dự án" width={"1000px"} visible={props.visible} onCancel={(()=>{
        //   onCancel()
        // })} centered footer={
        //     <Button onClick={()=>{
        //         onCancel()
        //     }} >
        //         Thoát 
        //     </Button>
        
        // }
        // >
        <div style ={{padding:'0px 15px 15px 15px'}}>
          <div style={{marginTop:'10px'}} >
            <p style={{fontWeight:'600', fontSize:'22px'}}>
              Chi tiết dự án
            </p>
          </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Image src='/Images/project1.jpg' width={700} height={400}/>
            </div>

            <Tabs style={{marginTop:'8px'}}>
                <TabPane style={{padding:'0px 50px 0px 50xp'}} tab="Thông tin dự án" key={1}>
                    <LDNLibrary.TableVertical columns={columns} datasource={dataSource}/>
                </TabPane>
                <TabPane tab="Album" >
                  
                  </TabPane>
            </Tabs>
           
          </div>
        // </Modal>
    )
}
export default ProjectDetail;
