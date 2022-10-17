import { Button, Col, Form, Input, message, Modal, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { CKEditor } from "ckeditor4-react";
import React, { useEffect, useState } from "react";
import { Value } from "sass";
import { TransferValueObject } from "../../../../../GeneralFunction/GeneralFunction";
import { getListMenu } from "../../../../../Service/MenuService";
import { AddPage, UpdatePage } from "../../../../../Service/PageService";
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
  const valueEditor = (e) => {
    console.log("e", e);
    return e.editor.getData();
  };
  const [form] = useForm();
  const { Option } = Select;
  const onFinish = (value) => {
    console.log("value", value);
    message.loading({
      duration: 2,
      content: "loading",
    });
    if (!props.dataUpdate) {
      AddPage(TransferValueObject(value))
        .then((res) => {
          CancelModal();

          message.success({
            duration: 5,
            content: "Thêm Page thành công",
          });
          props.onRefresh(true);
          form.resetFields();
          message.destroy();
        })
        .catch((e) => {
          CancelModal();
          form.resetFields();
          message.destroy();
          message.error({
            duration: 2,
            content: "Thêm Page không thành công",
          });
        });
    } else {
      value.id = props.dataUpdate.id;
      UpdatePage(props.dataUpdate.id, TransferValueObject(value))
        .then((res) => {
          CancelModal();
          form.resetFields();
          message.destroy();
          message.success({
            duration: 5,
            content: "Cập nhật Page thành công",
          });
          props.onRefresh(true);
        })
        .catch((e) => {
          CancelModal();
          form.resetFields();
          message.destroy();
          message.error({
            duration: 2,
            content: "Cập nhật Page không thành công",
          });
        });
    }
  };
  useEffect(() => {
    getMenus();
  }, []);
  useEffect(() => {
    if (props.dataUpdate) {
      console.log(props.dataUpdate);
      form.setFieldsValue(props.dataUpdate);
    }
  }, [props.dataUpdate]);
  return (
    <Modal
      title="Thêm trang"
      onOk={() => form.submit()}
      visible={props.visible}
      onCancel={CancelModal}
      width={"60%"}
      centered
      closable={false}
      // style={{ marginLeft: "259px" }}
      cancelText={"Hủy"}
      okText={props.dataUpdate ? "Cập nhật" : "Thêm"}
      zIndex={1060}
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
            <Form.Item name={"url"} label="Địa chỉ trang">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item name={"path"} label="Địa chỉ thư mục">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"pageContent"}
              label="Nội dung trang"
              getValueFromEvent={valueEditor}
            >
              <CKEditor
                // onget
                // onChange={(e) => {
                //   console.log("dsadsadasdasdasd", e.editor.getData());
                // }}
                // onChange={(event, editor) => {
                //   const data = editor.getData();
                //   console.log("dsadsadasdasdasd", { event, editor, data });
                // }}
                initData="<p>Hello from CKEditor 4!</p>"
              ></CKEditor>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default InsertUpdateMPages;
