import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, message, Modal, Row, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import IsMobileDevice from "../../../../../../GeneralFunction/GeneralFunction";
import { getSetting, PostSetting } from "../../../../../../Service/ConfigService";
import { getPages } from "../../../../../../Service/PageService";
import { postInsertUpload, UploadFile } from "../../../../../../Service/UploadService";
interface props {
  openModal: boolean;
  onCancel: (Value: any) => void;
  dataUpdate?:any 
}

const SettingSilder = (props: props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [PagesList, setPagesList] = useState<any[]>([]);
  const token= localStorage.getItem('token') ?? "";
  const IsMobile = IsMobileDevice();
  const getPagesList = async () => {
    let result = await getPages();
    if (result && result.data) {
      setPagesList(result.data);
      console.log("PgaesList", result.data);
    }
  };
  const [form]= useForm();
  const [fileList, setFileList] = useState<any>([]);
  const UploadImage = async (id:any, value:any) => {
    if (value) {
      console.log("dasdas", value.image);
      let a = await Promise.all(
        value.map(async (x:any) => {
          console.log("dasdasIMAGE", x.originFileObj);
          let insertDataUpload = await postInsertUpload(id,token,x.originFileObj,);
          console.log("Image", x.originFileObj);
          if (insertDataUpload) {
            let file = {
              idInsertData: insertDataUpload.data && insertDataUpload.data.id,
              idChecklist: id,
              upload: x.originFileObj,
            };
            await UploadFile(token,file);
          }
        })
      );
      console.log("Await", a);
    }
  };
  useEffect(() => { 
    if(props.dataUpdate)
    {
      // let formdata= JSON.parse(props.dataUpdate);
      // console.log('dsadasdasdas',formdata);
    
      handleChange({
        fileList:props.dataUpdate.Upload
      });
      form.setFieldsValue({...props.dataUpdate})

     
    }
  
   
  }, [props.dataUpdate])
  
  const handleChange = ({ fileList }:any) => {
    console.log('dasdasdasdsa',fileList);
    
    if (fileList.length > 0) {
      setFileList([fileList[fileList.length - 1]]);
    } else {
      setFileList([]);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  useEffect(() => {
    getPagesList();
  }, []);

  const 
  getFile = (e:any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish =async (value:any)=>{
    let Arrayupload:any[]= [];
      console.log('Value', value);
      let newData= {...value}; 
      const {Upload} = newData;
      delete newData.Upload
   
      if(newData)
      {
              let dataJson = JSON.stringify(newData);
            if(value)
            {
              let resultPostSetting =  await  PostSetting(token,{
                typeSetting : 'slider'
                ,data:dataJson
                
              });
              if(resultPostSetting.data && resultPostSetting && Upload.length>0)
              {
                console.log('dsadsadasdAAAA',Upload);
                
                try
                {
                  await  UploadImage(resultPostSetting.data?.id,Upload);
                  message.success({
                    content:'Tạo cấu hình  thành công',
                    duration:2,
    
                  })
                }
                catch(e)
                {
                  message.error({
                    content:'Tạo cấu hình không thành công',
                    duration:2,
    
                  })
                }  
                 
              }
            }
            else
            {
              message.error({
                content:'Tạo cấu hình không thành công',
                duration:2,

              })
            }
      }
   
      // console.log('Value', JSON.stringify(newData));
      // console.log('Value', value);
     
        
      

      
  }
  return (
    <Modal
      title={"Danh sách Silder"}
      visible={props.openModal}
      width={IsMobile ? "90%":"70%"}
      zIndex={1066}
      centered
      onCancel={() => props.onCancel(false)}
      onOk={()=>{
        form.submit();
      }}
    >
      <Form form={form}  onFinish={onFinish}>
      
                    <Row>
                      <Col  lg={12}>
                        <Form.Item
                      
                      name={'page'}
                        >
                          <Select placeholder="Chọn trang chi tiết cho sidler">
                            {PagesList.length > 0 &&
                              PagesList.map((x: any) => {
                                return <Select.Option value={x.id} >{x.name}</Select.Option>;
                              })}
                          </Select>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Form.Item   
                    
                        name={ 'description'}
                        >
                          <TextArea placeholder="Thông tin mô tả dự án"></TextArea>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Item
                       
                           name={ 'Upload'}
                           valuePropName="fileList"
                           getValueFromEvent={getFile}
                        >
                          
                          <Upload
                                 name="avatar"
                                 listType="picture-card"
                                 className="avatar-uploader"
                                 onChange={handleChange}
                               >
                                 { fileList.length >=1  ? null : uploadButton}
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
                

      
   
      </Form>
    </Modal>
  );
};

export default SettingSilder;
