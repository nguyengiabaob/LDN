import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, message, Modal, Row, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
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
          let insertDataUpload = await postInsertUpload(x.originFileObj);
          console.log("Image", x.originFileObj);
          if (insertDataUpload) {
            let file = {
              idInsertData: insertDataUpload.data && insertDataUpload.data.id,
              idChecklist: id,
              upload: x.originFileObj,
            };
            await UploadFile(file);
          }
        })
      );
      console.log("Await", a);
    }
  };
  useEffect(() => {
    console.log('dsadasdasdas',props.dataUpdate);
    if(props.dataUpdate)
    {
      let formdata= JSON.parse(props.dataUpdate);
      console.log('dsadasdasdas',formdata);
      
      form.setFieldsValue(formdata)
    }
  
   
  }, [props.dataUpdate])
  
  const handleChange = ({ fileList }:any) => {
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
      if(newData)
      {
        newData?.Silder.forEach((x:any)=>{
        if(x.Upload)
        {
          Arrayupload.push({...x.Upload[0]});
          x.Upload = {
            uid: x.Upload[0].originFileObj.uid,
            name: x.Upload[0].originFileObj.name,
            type :  x.Upload[0].originFileObj.type,
          };
        }
        })
      }
      console.log('Value', JSON.stringify(newData));
      console.log('Value', value);
            let dataJson = JSON.stringify(newData);
            if(value)
            {
              let resultPostSetting =  await  PostSetting({
                typeSetting : 'slider'
                ,data:dataJson
                
              });
              if(resultPostSetting.data && resultPostSetting && Arrayupload.length>0)
              {
                console.log('dsadsadasdAAAA',Arrayupload);
                
                try
                {
                  await  UploadImage(resultPostSetting.data?.id,Arrayupload);
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
  return (
    <Modal
      title={"Danh sách Silder"}
      visible={props.openModal}
      width={"70%"}
      centered
      onCancel={() => props.onCancel(false)}
      onOk={()=>{
        form.submit();
      }}
    >
      <Form form={form}  onFinish={onFinish}>
        <Form.List   name={"Silder"}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map((field: any) => (
                  <>
                    <Row>
                      <Col  lg={12}>
                        <Form.Item
                      {...field}
                      name={[field.name, 'page']}
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
                        {...field}
                        name={[field.name, 'description']}
                        >
                          <TextArea placeholder="Thông tin mô tả dự án"></TextArea>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Item
                           {...field}
                           name={[field.name, 'Upload']}
                           valuePropName="fileList"
                           getValueFromEvent={getFile}
                        >
                          
                          <Upload
                                 name="avatar"
                                 listType="picture-card"
                                 className="avatar-uploader"
                                 onChange={handleChange}
                               >
                                 {form.getFieldsValue().Silder?.[field.key]?.Upload ? null : uploadButton}
                          </Upload>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                ))}

                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => {
                      console.log('dsadsadsa',form.getFieldsValue());
                      
                      setFileList([])
                      add();
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add sights
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      </Form>
    </Modal>
  );
};

export default SettingSilder;
