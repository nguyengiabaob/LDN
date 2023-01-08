import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
  Upload,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState, useEffect } from "react";
import IsMobileDevice from "../../../../../GeneralFunction/GeneralFunction";
import { baseUrl } from "../../../../../Service/Client";
import {
  AddProject,
  UpdateProject,
} from "../../../../../Service/ProjectService";
import {
  postInsertUpload,
  UploadFile,
} from "../../../../../Service/UploadService";

const InsertUploadProjects = (props) => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token") ?? "";
  const IsMobile = IsMobileDevice();
  const [form] = useForm();
  const [fileList, setFileList] = useState([]);
  const UploadImage = async (id, value) => {
    if (value.image) {
      console.log("dasdas", value.image);
      let a = await Promise.all(
        value.image.map(async (x) => {
          console.log("dasdasIMAGE", x.originFileObj);
          let insertDataUpload = await postInsertUpload(
            id,
            token,
            x.originFileObj
          );
          console.log("Image", x.originFileObj);
          if (insertDataUpload) {
            let file = {
              idInsertData: insertDataUpload.data?.id,
              idChecklist: id,
              upload: x.originFileObj,
            };
            await UploadFile(token, file);
          }
        })
      );
      console.log("Await", a);
    }
  };
  useEffect(() => {
    if (props.dataUpdate) {
      console.log(props.dataUpdate);
      form.setFieldsValue(props.dataUpdate);
      // form.setFieldValue("image", [
      //   {
      //     url: baseUrl + `/Images/reference22011838.png`,
      //   },
      // ]);
    }
  }, [props.dataUpdate]);
  // const handleChange = ({ fileList }) => {
  //   // if (info.file.status === "uploading") {
  //   // setLoading(true);
  //   //   return;
  //   // }
  //   // setLoading(false);
  //   setfileList([fileList[fielList.length - 1]]);
  //   // console.log("fileList", fileList.length);
  //   // console.log("info.file.originFileObj", info.file.originFileObj);
  //   // if (info.file.status === "done") {
  //   // Get this url from response in real world.
  //   // getBase64(info.file.originFileObj, (url) => {
  //   //   setImageUrl(url);
  //   // });
  //   // }
  // };
  const handleChange = ({ fileList }) => {
    if (fileList.length > 0) {
      setFileList([fileList[fileList.length - 1]]);
    } else {
      setFileList([]);
    }
  };
  const getFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = (value) => {
    if (value) {
      value.total = Number(value.total);
    }
    message.loading({
      duration: 2,
      content: "Loading",
    });
    if (!props.dataUpdate) {
      AddProject(token, value)
        .then((res) => {
          try {
            UploadImage(res.data.id, value);
            message.destroy();
            message.success({
              duration: 4,
              content: "Thêm dự án thành công",
            });
            props.onvisible(false);
            props.onRefresh(true);
          } catch (e) {
            message.destroy();
            message.error({
              duration: 4,
              content: "Thêm dự án không thành công",
            });
          }
        })
        .catch((e) => {
          message.destroy();
          message.error({
            duration: 4,
            content: "Thêm dự án không thành công",
          });
        });
    } else {
      if (props.dataUpdate?.id) {
        value.id = props.dataUpdate?.id;
      }
      UpdateProject(props.dataUpdate?.id, token, value)
        .then((res) => {
          try {
            UploadImage(res.data.id, value);
            message.destroy();
            message.success({
              duration: 4,
              content: "Chỉnh sửa dự án thành công",
            });
            props.onvisible(false);
            props.onRefresh(true);
          } catch (e) {
            message.destroy();
            message.error({
              duration: 4,
              content: "Chỉnh sửa dự án không thành công",
            });
          }
        })
        .catch((e) => {
          message.destroy();
          message.error({
            duration: 4,
            content: "Chỉnh sửa dự án không thành công",
          });
        });
    }
  };
  let a = "Tên chủ đầu tư";
  console.log(a.length);
  const { TextArea } = Input;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Modal
      visible={props.visible}
      title={props.dataUpdate ? "Chỉnh Sửa dự án" : "Thêm dự án"}
      onOk={() => form.submit()}
      onCancel={() => {
        props.onvisible();
      }}
      width={IsMobile ? "90%" : "60%"}
      centered
      closable={false}
      /* style={{ marginLeft: "259px" }} */
      cancelText={"Hủy"}
      okText={props.dataUpdate ? "Cập nhật" : "Thêm"}
    >
      <div className="div-row">
        <Form
          labelCol={{ lg: 2, md: 6, sm: 8, xl: 2, xxl: 2, xs: 24 }}
          // wrapperCol={{ lg: 16, md: 18, sm: 16, xs: 24, xl: 18, xxl: 20 }}
          form={form}
          onFinish={onFinish}
          layout="horizontal"
        >
          <Row>
            <Col xs={24} sm={24} lg={24} xxl={24} md={24} xl={24}>
              <Form.Item
                name={"name"}
                label={"Tên dự án"}
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên chủ đầu tư",
                  },
                ]}
              >
                <Input placeholder="Tên chủ đầu tư" />
              </Form.Item>
            </Col>
          </Row>

          {/* <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item
              labelCol={{ lg: 4, sm: 4 }}
              wrapperCol={{ lg: 4, sm: 4 }}
              label={"Giá trị"}
              rules={[
                {
                  required: true,
                  message: "Hãy nhập giá trị",
                },
              ]}
            >
              <Input placeholder="Giá trị" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={"Dự án"}
              labelCol={32}
              rules={[
                {
                  required: true,
                  message: "Hãy nhập tên dự án",
                },
              ]}
            >
              <Input placeholder="Tên dự án " />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label={"Mô tả"}
              labelCol={32}
              rules={[
                {
                  required: true,
                  message: "Hãy nhập mô tả",
                },
              ]}
            >
              <TextAr ea />
            </Form.Item>
          </Col>
        </Row> */}
        </Form>
      </div>
      <div>
        <Form
          onFinish={onFinish}
          form={form}
          labelCol={{ lg: 4, md: 6, sm: 8, xl: 4, xxl: 4, xs: 24 }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={12} md={24} xl={12}>
              <Form.Item
                name={"owner"}
                label={"Tên chủ đầu tư"}
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên chủ đầu tư",
                  },
                ]}
              >
                <Input placeholder="Hãy nhập tên chủ đầu tư" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12} md={24} xl={12}>
              <Form.Item
                label={"total"}
                name={"total"}
                rules={[
                  {
                    required: true,
                    message: "Giá trị",
                  },
                ]}
              >
                <Input placeholder="Giá trị " type="number" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Form
          labelCol={{ lg: 2, md: 6, sm: 8, xl: 2, xxl: 2, xs: 24 }}
          // wrapperCol={{ lg: 20, md: 18, sm: 16, xs: 24, xl: 21, xxl: 22 }}
          form={form}
          onFinish={onFinish}
          layout="horizontal"
        >
          <Row>
            <Col xs={24} sm={24} lg={24} xxl={24} md={24} xl={24}>
              <Form.Item
                name={"address"}
                label={"Địa điểm"}
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên chủ đầu tư",
                  },
                ]}
              >
                <Input placeholder="Tên chủ đầu tư" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Form
          onFinish={onFinish}
          form={form}
          labelCol={{ lg: 4, md: 6, sm: 8, xs: 24 }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} lg={12} xxl={12} md={24} xl={12}>
              <Form.Item
                name={"startDate"}
                label={"Ngày bắt đầu"}
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên chủ đầu tư",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12} xxl={12} md={24} xl={12}>
              <Form.Item
                name={"endDate"}
                label={"Ngày kết thúc"}
                rules={[
                  {
                    required: true,
                    message: "Giá trị",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Form
          onFinish={onFinish}
          form={form}
          labelCol={{ lg: 4, md: 6, sm: 8, xl: 4, xxl: 4, xs: 24 }}
        >
          <Row gutter={[4, 16]}>
            <Col xs={24} sm={24} lg={12} xxl={12} md={24} xl={12}>
              <Form.Item
                name={"typeContructedId"}
                label={"Loại"}
                // rules={[
                //   {
                //     required: true,
                //     message: "Hãy nhập tên chủ đầu tư",
                //   },
                // ]}
              >
                <Select placeholder="Chọn loại"></Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12} xxl={12} md={24} xl={12}>
              <Form.Item
                name={"statusId"}
                label={"Trạng thái"}
                // rules={[
                //   {
                //     required: true,
                //     message: "Trạng thái",
                //   },
                // ]}
              >
                <Select placeholder="Trạng thái"></Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Form
          form={form}
          onFinish={onFinish}
          layout="horizontal"
          labelCol={{ lg: 2, md: 6, sm: 8, xl: 2, xxl: 2, xs: 24 }}
        >
          <Row>
            <Col xs={24} sm={24} lg={24} xxl={24} md={24} xl={24}>
              <Form.Item
                name={"description"}
                label={"Mô tả"}
                // rules={[
                //   {
                //     required: true,
                //     message: "Hãy nhập mô tả",
                //   },
                // ]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Form
          form={form}
          onFinish={onFinish}
          layout="horizontal"
          labelCol={{ lg: 2, md: 6, sm: 8, xl: 2, xxl: 2, xs: 24 }}
        >
          <Row>
            <Col xs={24} sm={24} lg={24} xxl={24} md={24} xl={24}>
              <Form.Item
                valuePropName="fileList"
                name={"image"}
                label={"Mô tả"}
                getValueFromEvent={getFile}
                // rules={[
                //   {
                //     required: true,
                //     message: "Hãy nhập mô tả",
                //   },
                // ]}
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};
export default InsertUploadProjects;
