import {
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Modal,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import React from "react";
import { AddProject } from "../../../../../Service/ProjectService";

const InsertUploadProjects = (props) => {
  const [form] = useForm();
  const onFinish = (value) => {
    console.log(value);
    // message.loading({
    //   duration: 2,
    //   content: "Loading",
    // });
    // AddProject(value)
    //   .then((res) => {
    //     message.destroy();
    //     message.success({
    //       duration: 4,
    //       content: "Thêm dự án thành công",
    //     });
    //   })
    //   .catch((e) => {
    //     message.destroy();
    //     message.error({
    //       duration: 4,
    //       content: "Thêm dự án không thành công",
    //     });
    //   });
  };
  let a = "Tên chủ đầu tư";
  console.log(a.length);
  const { TextArea } = Input;
  return (
    <Modal
      visible={props.visible}
      title="Thêm dự án"
      onOk={() => form.submit()}
      onCancel={() => {
        props.onvisible();
      }}
      width={"60%"}
      centered
      closable={false}
      /* style={{ marginLeft: "259px" }} */
      cancelText={"Hủy"}
      okText={"Thêm"}
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
                rules={[
                  {
                    required: true,
                    message: "Giá trị",
                  },
                ]}
              >
                <Input placeholder="Giá trị " />
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
                name={"StartDate"}
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
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập tên chủ đầu tư",
                  },
                ]}
              >
                <Select placeholder="Chọn loại"></Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} lg={12} xxl={12} md={24} xl={12}>
              <Form.Item
                name={"statusId"}
                label={"Trạng thái"}
                rules={[
                  {
                    required: true,
                    message: "Trạng thái",
                  },
                ]}
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
                rules={[
                  {
                    required: true,
                    message: "Hãy nhập mô tả",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </Modal>
  );
};
export default InsertUploadProjects;
