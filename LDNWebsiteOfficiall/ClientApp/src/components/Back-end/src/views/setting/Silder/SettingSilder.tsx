import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, message, Modal, Row, Select, Upload } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React, { useState } from 'react'
interface props {
    openModal: boolean,
    onCancel:(Value:any)=>void
}

const SettingSilder = (props:props) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const getBase64 = (img:any, callback:(value:any)=>void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      };
    const beforeUpload = (file:any) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      };
      const handleChange = (info:any) => {
        if (info.file.status === 'uploading') {
          setLoading(true);
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, (url) => {
            setLoading(false);
            setImageUrl(url);
          });
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
  return (
    <Modal
    title={'Danh sách Silder'}
     visible={props.openModal}
     width={'70%'}
     centered
     onCancel={()=>props.onCancel(false)}
    >
    <Form>
        <Form.List name={'Silder'} >
                {
                 (  fields, { add, remove })=>{
                    return (
                        <>
                        {
                            fields.map((field:any)=>(
                            <>
                               <Row>
                                <Col lg={12}>
                                    <Form.Item >
                                        <Select placeholder="Chọn trang chi tiết cho sidler">
                                            <Select.Option>
                                                {
                                                    
                                                }
                                            </Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                               </Row>
                               <Row>
                                <Col lg={12}>
                                    <Form.Item >
                                       <TextArea placeholder='Thông tin mô tả dự án'>

                                       </TextArea>
                                    </Form.Item>
                                </Col>
                               </Row>                
                               <Row>
                                <Col>
                                    <Form.Item >
                                        <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}
                                        >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>
                                    </Form.Item>
                                </Col>
                               </Row>    
                               </>
                               
                            ))
                        }

                        <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add sights
                        </Button>
                      </Form.Item>
                        </>
                      
                    )
                 }

                }
        </Form.List>
       </Form>
    </Modal>
  )
}

export default SettingSilder