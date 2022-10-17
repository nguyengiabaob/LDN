import { Card, Modal } from "antd";
import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import SettingSilder from "./Silder/SettingSilder";

const ListItemSetting = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <Modal
      visible={props.visible}
      title={`Danh sách các phần của trang ${props.name}`}
      width={"60%"}
      centered
      footer={<></>}
      onCancel={() => {
        props.onVisible(false);
      }}
    >
      <Card
        onClick={() => {
          setVisible(true);
        }}
        className="ldn-card-click"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Silder</div>
          <div>
            <GiSettingsKnobs size={32} />
          </div>
        </div>
      </Card>
      <SettingSilder onCancel={setVisible} openModal={visible} />
    </Modal>
  );
};

export default ListItemSetting;
