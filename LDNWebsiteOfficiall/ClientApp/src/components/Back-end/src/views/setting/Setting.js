import { Card, Space } from "antd";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import ListItemSetting from "./ListItemSetting";
import ListSettingIntroduction from "./introduction/ListSettingIntroduction";
import IsMobileDevice from "../../../../../GeneralFunction/GeneralFunction";

const Setting = () => {
  const [visible, setVisible] = useState(false);
  const [visibleIntroduction, setVisibleIntroduction] = useState(false);
  const IsMobile = IsMobileDevice();
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Card
        style={{ borderRadius: "8px", width: "100%" }}
        // extra={
        //   <div>
        //     <SettingOutlined size={50} />
        //   </div>
        // }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "18px" }}>Trang chủ</p>
          <div>
            <AiOutlineSetting
              className="ldn-icon-hover"
              onClick={() => {
                setVisible(true);
              }}
              size={32}
            />
          </div>
        </div>
      </Card>
      <Card
        style={{ borderRadius: "8px" }}
        // extra={
        //   <div>
        //     <SettingOutlined size={50} />
        //   </div>
        // }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontWeight: "700", fontSize: "18px" }}>Giới thiệu</p>
          <div>
            <AiOutlineSetting
              className="ldn-icon-hover"
              onClick={() => {
                setVisibleIntroduction(true);
              }}
              size={32}
            />
          </div>
        </div>
      </Card>
      <ListItemSetting
        visible={visible}
        onVisible={setVisible}
        name={"trang chủ"}
      />
      <ListSettingIntroduction
        visible={visibleIntroduction}
        onVisible={setVisibleIntroduction}
        name="Giới thiệu"
      />
    </Space>
  );
};
export default Setting;
