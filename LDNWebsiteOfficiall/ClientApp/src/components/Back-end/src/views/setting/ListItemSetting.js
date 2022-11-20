import { Card, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { getSetting } from "../../../../../Service/ConfigService";
import SettingSilder from "./Silder/SettingSilder";

const ListItemSetting = (props) => {
  const [visible, setVisible] = useState(false);
  const [formSetting, setFormSetting] = useState();
  const getFormSetting = async () => {
    const result = await getSetting("slider");
    if (result && result.data) {
      console.log("sdsadsadasdasdsa", result.data);

      setFormSetting(result.data);
    }
  };
  useEffect(() => {
    getFormSetting();
  }, []);
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
      <SettingSilder
        dataUpdate={formSetting ? formSetting[4]?.data : null}
        onCancel={setVisible}
        openModal={visible}
      />
    </Modal>
  );
};

export default ListItemSetting;
