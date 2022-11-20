import { Button, Card, message, Table } from "antd";
import React, { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { DeletePage, getPages } from "../../../../../Service/PageService";
import InsertUpdateMPages from "./InsertUpdatePages";
const Pages = () => {
  const [visible, setVisible] = useState(false);
  const [Pages, setPages] = useState();
  const [refresh, setRefresh] = useState(true);
  const [dataUpdate, setDataUpdate] = useState();
  const getListPages = () => {
    getPages().then((res) => {
      if (res.data && res.data.length > 0) {
        res.data.forEach((x, i) => {
          x.stt = i + 1;
        });
        setPages(res.data);
      }
    });
  };
  const columns = [
    {
      id: 1,
      title: "STT",
      dataIndex: "stt",
    },
    {
      id: 2,
      title: "Tên trang",
      dataIndex: "name",
    },
    {
      id: 3,
      title: "File Folder",
      dataIndex: "",
    },
    {
      id: 4,
      title: "Url",
      dataIndex: "url",
    },
    {
      title: "",
      dataIndex: "Action",
      key: "Action",
      render: (value, row) => {
        return (
          <div>
            <Button
              onClick={() => {
                setVisible(true);
                setDataUpdate(row);
                setRefresh(false);
              }}
            >
              <BiEdit color="edc458" size={28} />
            </Button>
            <Button
              onClick={() => {
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
  const onCreatePages = () => {
    setVisible(true);
  };
  useEffect(() => {
    if (refresh == true) {
      console.log("chạy");
      getListPages();
    }
  }, [refresh]);
  const onDelete = (id) => {
    message.loading({
      duration: 5,
      content: "Loading",
    });
    DeletePage(id)
      .then((res) => {
        message.destroy();
        message.loading({
          duration: 5,
          content: "Menu đã dược xóa",
        });
        setRefresh(true);
      })
      .catch((e) => {
        message.destroy();
        message.loading({
          duration: 5,
          content: "Menu chưa được dược xóa",
        });
      });
  };
  return (
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
            Danh sách Pages
          </span>
          <Button onClick={onCreatePages} title="Thêm trang">
            Thêm Pages
          </Button>
        </div>
        <div>
          <Table dataSource={Pages} columns={columns} rowKey="id" />
        </div>
      </Card>
      <InsertUpdateMPages
        dataUpdate={dataUpdate}
        onRefresh={setRefresh}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};
export default Pages;
