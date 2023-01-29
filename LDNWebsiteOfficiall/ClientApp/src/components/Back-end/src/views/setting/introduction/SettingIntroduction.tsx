import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, message, Modal, Row, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { getSetting, PostSetting, UpdateSetting } from "../../../../../../Service/ConfigService";
import { getPages } from "../../../../../../Service/PageService";
import { postInsertUpload, UploadFile } from "../../../../../../Service/UploadService";
interface props {
  openModal: boolean;
  onCancel: (Value: any) => void;
  dataUpdate?:any 
}

const SettingIntroduction = (props: props) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const [PagesList, setPagesList] = useState<any[]>([]);
  const token= localStorage.getItem('token') ?? "";
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
      let a = await Promise.all(
        value.map(async (x:any) => {
          console.log("dasdasIMAGE", x.originFileObj);
          let insertDataUpload = await postInsertUpload(id,token,x.originFileObj);
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
      let formdata= JSON.parse(props.dataUpdate?.data);
      console.log('dsadasdasdas',formdata);
      handleChange({
        fileList:props.dataUpdate.Upload
      });
      
      form.setFieldsValue({...formdata})
    }
  
   
  }, [props.dataUpdate])
  
  const handleChange = ({ fileList }:any) => {
    if (fileList && fileList.length > 0) {
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
   
      if(!props.dataUpdate)
      {
        if(newData)
        {
                let dataJson = JSON.stringify(newData);
              if(value)
              {
                let resultPostSetting =  await  PostSetting(token,{
                  typeSetting : 'introduction'
                  ,data:dataJson
                  
                });
                if(resultPostSetting.data && resultPostSetting &&Upload && Upload.length>0)
                {
                  console.log('dsadsadasdAAAA',Upload);
                  
                  try
                  {
                    await  UploadImage(resultPostSetting.data?.id,Upload);
                    message.success({
                      content:'Tạo cấu hình  thành công',
                      duration:2,
      
                    })
                    form.resetFields();
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
      }
      else

      {
        if(newData)
        {
          console.log('dsadasds',props.dataUpdate);
        
                let dataJson = JSON.stringify(newData);
               
              if(value)
              {
                let resultPostSetting =  await  UpdateSetting(props.dataUpdate.id,token,{
                  typeSetting : 'introduction'
                  ,data:dataJson,
                  id:props.dataUpdate.id
                  
                });
                if(resultPostSetting.data && resultPostSetting &&Upload && Upload.length>0)
                {
                  console.log('dsadsadasdAAAA',Upload);
                  
                  try
                  {
                    await  UploadImage(resultPostSetting.data?.id,Upload);
                  }
                  catch(e)
                  {
                    message.error({
                      content:'Tạo cấu hình không thành công',
                      duration:2,
      
                    })
                  }  
                   
                }
                message.success({
                  content:'Tạo cấu hình  thành công',
                  duration:2,
  
                })
                form.resetFields();
                props.onCancel(true);
              }
              else
              {
                message.error({
                  content:'Tạo cấu hình không thành công',
                  duration:2,
  
                })
              }
        }      

      }
  }
  return (
    <Modal
      title={"Danh sác đoạn văn giới thiệu "}
      visible={props.openModal}
      width={"70%"}
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
                      
                      name={'Paragraph 1'}
                        >
                         <TextArea placeholder="Đoạn văn đầu tiên"/>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Form.Item   
                    
                        name={ 'Paragraph 2'}
                        >
                          <TextArea placeholder="Thông tin mô tả "></TextArea>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Form.Item   
                    
                        name={ 'Paragraph 3'}
                        >
                          <TextArea placeholder="Thông tin mô tả "></TextArea>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Form.Item   
                    
                        name={ 'Paragraph 4'}
                        >
                          <TextArea placeholder="Thông tin mô tả "></TextArea>
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
                                 { fileList.length >=1 ? null : uploadButton}
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
      </Form>
    </Modal>
  );
};

export default SettingIntroduction;
