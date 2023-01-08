import { Card, Modal } from 'antd';
import React, { useEffect, useState } from 'react'
import { GiSettingsKnobs } from 'react-icons/gi';
import IsMobileDevice from '../../../../../../GeneralFunction/GeneralFunction';
import { getSetting } from '../../../../../../Service/ConfigService';
import ListSilder from '../Silder/ListSilder';
import SettingIntroduction from './SettingIntroduction';
interface props {
    name:string,
    visible: boolean,
    onVisible: (value:any)=>void
}
const ListSettingIntroduction = (props:props) => {
    const [visible, setVisible] = useState(false);
    const [formSetting, setFormSetting] = useState();
    const IsMobile = IsMobileDevice();
    const getFormSetting = async () => {
      const result = await getSetting("introduction");
      if (result && result.data) {
        setFormSetting(result.data? result.data[0]: undefined);
        console.log('dasdfsadsads',result.data );
        
      }
    };
    useEffect(() => {
      getFormSetting();
    }, []);
    return (
      <Modal
        visible={props.visible}
        title={`Danh sách các phần của trang ${props.name}`}
        width={IsMobile ? "90%" : "60%"}
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
            <div>Giới thiệu</div>
            <div>
              <GiSettingsKnobs size={32} />
            </div>
          </div>
        </Card>
          <SettingIntroduction openModal={visible} onCancel={setVisible} dataUpdate={formSetting} />
      </Modal>
    );
}

export default ListSettingIntroduction