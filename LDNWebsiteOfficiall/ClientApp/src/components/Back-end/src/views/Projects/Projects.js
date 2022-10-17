import { Button, Card, Table } from "antd";
import React, { useState } from "react";
import InsertUploadProjects from "./InsertuploadProject";
const Projects = () => {
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "Chủ đầu tư",
      dataindex: "investor",
      key: "investor",
    },
    {
      title: "Tên dự án",
      dataindex: "projectName",
      key: "projectName",
    },
    {
      title: "Địa điểm",
      dataindex: "Address",
      key: "Address",
    },
    {
      title: "Giá trị",
      dataindex: "value",
      key: "value",
    },
  ];
  const onCreateProject = () => {
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
            Danh sách dự án
          </span>
          <Button onClick={onCreateProject} title="Thêm trang">
            Thêm dự án
          </Button>
        </div>
        <div>
          <Table dataSource={[]} columns={columns} />
        </div>
      </Card>
      <InsertUploadProjects visible={visible} onvisible={setVisible} />
    </div>
  );
};
export default Projects;
