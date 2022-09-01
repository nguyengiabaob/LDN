import { Button, Card, Table } from "antd";
import React, { useState } from "react";
import InsertUpdateMPages from "./InsertUpdatePages";
const Pages = () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      id: 1,
      title: "STT",
      dataIndex: "",
    },
    {
      id: 2,
      title: "Tên trang",
      dataIndex: "",
    },
    {
      id: 3,
      title: "File Folder",
      dataIndex: "",
    },
    {
      id: 4,
      title: "Url",
      dataIndex: "",
    },
  ];
  const onCreatePages = () => {
    setVisible(true);
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
          <Table dataSource={[]} columns={columns} />
        </div>
      </Card>
      <InsertUpdateMPages visible={visible} setVisible={setVisible} />
    </div>
  );
};
export default Pages;
