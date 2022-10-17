import { Button, Col, Form, Input, message, Modal, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { Value } from "sass";
import { TransferValueObject } from "../../../../../GeneralFunction/GeneralFunction";
import {
  deleteMenu,
  getListMenu,
  postMenu,
  UpdateMenu,
} from "../../../../../Service/MenuService";
import { getPages } from "../../../../../Service/PageService";
const InsertUploadMenu = (props) => {
  const [ListMenus, setListMenu] = useState([]);
  const [ListPages, setLstPages] = useState([]);
  const getMenus = () => {
    getListMenu().then((res) => {
      console.log("menus", res.data);
      setListMenu(res.data);
    });
  };

  const gePages = () => {
    getPages().then((res) => {
      setLstPages(res.data);
    });
  };
  const CancelModal = () => {
    props.setVisible(false);
    form.resetFields();
  };
  const [form] = useForm();
  const { Option } = Select;
  const onFinish = (value) => {
    console.log(value);
    message.loading({
      duration: 2,
      content: "loading",
    });
    if (!props.dataUpdate) {
      postMenu(TransferValueObject(value))
        .then((res) => {
          message.destroy();
          CancelModal();
          message.success({
            duration: 2,
            content: "Thêm menu thành công",
          });
          props.onRefresh(true);
        })
        .catch((e) => {
          message.destroy();
          CancelModal();
          message.error({
            duration: 2,
            content: "thêm menu không thành công",
          });
        });
    } else {
      value.id = props.dataUpdate.id;
      UpdateMenu(props.dataUpdate.id, TransferValueObject(value))
        .then((res) => {
          message.destroy();
          CancelModal();
          message.success({
            duration: 2,
            content: "Sửa menuthành công",
          });
          props.onRefresh(true);
        })
        .catch((e) => {
          message.destroy();
          CancelModal();
          message.error({
            duration: 2,
            content: "Sửa menu không thành công",
          });
        });
    }
  };
  useEffect(() => {
    getMenus();
    gePages();
  }, []);
  useEffect(() => {
    form.setFieldsValue(props.dataUpdate);
  }, [props.dataUpdate]);
  return (
    <Modal
      title="Thêm Menu"
      onOk={() => form.submit()}
      visible={props.visible}
      onCancel={CancelModal}
      width={"60%"}
      centered
      closable={false}
      cancelText={"Hủy"}
      okText={"Thêm"}
    >
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={24}>
            <Form.Item
              name={"name"}
              label="Tên menu"
              rules={[
                {
                  required: true,
                  message: `Hãy nhập tên menu`,
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
              name={"pagesId"}
              label="Trang"
              rules={[
                {
                  required: true,
                  message: `Hãy chọn trang`,
                },
              ]}
            >
              <Select placeholder="Chọn trang">
                {ListPages.length > 0 &&
                  ListPages.map((x) => {
                    return <Option value={x.id}>{x.name}</Option>;
                  })}
              </Select>
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
                {props.dataUpdate &&
                  ListMenus.length > 0 &&
                  ListMenus.filter((x) => x.id !== props.dataUpdate.id).map(
                    (item) => {
                      return <Option key={item.id}>{item.name}</Option>;
                    }
                  )}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
export default InsertUploadMenu;
