import { Button, Col, Form, Input, message, Modal, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { CKEditor } from "ckeditor4-react";
import React, { useEffect, useState } from "react";
import { Value } from "sass";
import { getListMenu } from "../../../../../Service/MenuService";
import { AddPage } from "../../../../../Service/PageService";
const InsertUpdateMPages = (props) => {
  const [ListMenus, setListMenu] = useState([]);
  const getMenus = () => {
    getListMenu().then((res) => {
      console.log("menus", res.data);
      setListMenu(res.data);
    });
  };
  const CancelModal = () => {
    props.setVisible(false);
  };
  const [form] = useForm();
  const { Option } = Select;
  const onFinish = (value) => {
    console.log(value);
    message.loading({
      duration: 2,
      content: "loading",
    });
    AddPage(value).then((res) => {
      message.destroy();
      message.success({
        duration: 2,
        content: "Thêm Page thành công",
      });
    });
  };
  useEffect(() => {
    getMenus();
  }, []);
  return (
    <Modal
      title="Thêm trang"
      onOk={() => form.submit()}
      visible={props.visible}
      onCancel={CancelModal}
      width={"60%"}
      centered
      closable={false}
      style={{ marginLeft: "259px" }}
      cancelText={"Hủy"}
      okText={"Thêm"}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"name"}
              label="Tên trang"
              rules={[
                {
                  required: true,
                  message: `Hãy nhập tên trang`,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"name"}
              label="Địa chỉ trang"
              rules={[
                {
                  required: true,
                  message: `Hãy nhập địa chỉ trang`,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"name"}
              label="Địa chỉ thư mục"
              rules={[
                {
                  required: true,
                  message: `Hãy nhập địa chỉ thư mục`,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"name"}
              label="Địa chỉ thư mục"
              rules={[
                {
                  required: true,
                  message: `Hãy nhập địa chỉ thư mục`,
                },
              ]}
            >
              <CKEditor></CKEditor>
            </Form.Item>
          </Col>
        </Row>

        {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"pagesId"}
              label="Trang"
              rules={[
                {
                  // required: true,
                  message: `Hãy chọn trang`,
                },
              ]}
            >
              <Select placeholder="Chọn trang"></Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"parentMenu"}
              label="Menu cha"
              rules={[
                {
                  // required: true,
                  message: `Hãy chọn menu cha`,
                },
              ]}
            >
              <Select placeholder="Chọn menu">
                {ListMenus.length > 0 &&
                  ListMenus.map((item) => {
                    return <Option key={item.id}>{item.name}</Option>;
                  })}
              </Select>
            </Form.Item>
          </Col>
        </Row> */}
      </Form>
    </Modal>
  );
};
export default InsertUpdateMPages;
