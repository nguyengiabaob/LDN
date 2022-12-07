import { Button, Card, message, Modal, Table } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { baseUrl } from "../../../../../../Service/Client";
import { getSetting } from "../../../../../../Service/ConfigService";
import { getUploadImage } from "../../../../../../Service/UploadService";
import SettingSilder from "./SettingSilder";
interface props {
  openModal: boolean;
  onCancel: (value: any) => void;
}
const ListSilder = (props:props) => {
  const [SliderLists, setSliderLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Slider, setSlider] = useState();
  const [refresh, setRefresh] = useState(true);
  const columns = [
    {
      title: "Thông tin mô tả ",
      dataIndex: "description",
      key: "owner",
    },
    {
      title: "Trang",
      dataIndex: "NamePage",
      key: "name",
    },
    {
      title: "",
      dataIndex: "Action",
      key: "Action",
      render: (value: any, row: any) => {
        return (
          <div>
            <Button
              onClick={async () => {
                let dataRow = row;
                if (dataRow.startDate) {
                  dataRow.startDate = moment(dataRow.startDate);
                }
                if (dataRow.endDate) {
                  dataRow.endDate = moment(dataRow.endDate);
                }
                let ImageUpload = await getUploadImage(dataRow.id);
                if (ImageUpload) {
                  let Arrpath = ImageUpload.data?.data.split("\\");
                  console.log("dsadas", Arrpath);
                  if (Arrpath.length > 0) {
                    let path =
                      baseUrl +
                      `/${Arrpath[Arrpath.length - 2]}/${
                        Arrpath[Arrpath.length - 1]
                      }`;

                    dataRow.image = [
                      {
                        url: path,
                      },
                    ];
                  }
                }
                setSlider(dataRow);
                setRefresh(false);
                setVisible(true);
              }}
            >
              <BiEdit color="edc458" size={28} />
            </Button>
            <Button
              onClick={() => {
                setRefresh(false);
                onDelete(row.id);
              }}
              style={{ marginLeft: "2px" }}
            >
              <MdDeleteOutline color="red" size={28} />
            </Button>
          </div>
        );
      },
    },
  ];
  const getSliderList = async () => {
      let dataSlider = await getSetting('slider');
      if (dataSlider) {
        setIsLoading(false);
        console.log("dataProject", dataSlider.data);
        setSliderLists(dataSlider.data);
      }
  };
  const onCreateProject = () => {
    setVisible(true);
  };
  useEffect(() => {
    if (refresh == true) {
      setIsLoading(true);
      getSliderList();
    }
  }, [refresh]);
  const onDelete = (id: any) => {
    message.loading({
      duration: 5,
      content: "Loading",
    });
    //   DeleteProject(id)
    //     .then((res) => {
    //       message.destroy();
    //       message.success({
    //         duration: 5,
    //         content: "Dự án đã dược xóa",
    //       });
    //       setRefresh(true);
    //     })
    //     .catch((e) => {
    //       message.destroy();
    //       message.loading({
    //         duration: 5,
    //         content: "Dự án chưa được dược xóa",
    //       });
    //     });
  };
  return (
    <>
    <Modal width={"70%"} zIndex={1066} centered onCancel={()=>props.onCancel(false)} open={props.openModal}>
      <div>
        <Card style={{ padding: "0px 5px 0px 5px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "15px",
            }}
          >
            <span style={{ fontSize: "25px", fontWeight: 700 }}>
              Danh sách Slider
            </span>
            <Button onClick={onCreateProject} title="Thêm trang">
              Thêm Slider
            </Button>
          </div>
          <div>
            <Table
              loading={isLoading}
              dataSource={SliderLists ? SliderLists : []}
              columns={columns}
            />
          </div>
        </Card>
       
      </div>
    </Modal>
    <SettingSilder openModal={visible} onCancel={setVisible} dataUpdate={Slider && Slider} />
    </>
  );
};

export default ListSilder;
