import { Card } from "antd";
import React, { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import ListItemSetting from "./ListItemSetting";

const Setting = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
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
                setVisible(true);
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
    </div>
  );
};
export default Setting;
