import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react";
// import CategoriesService from "../../../../Data/Service/CategoriesService";
import { useSelector } from "react-redux";
import { Button, Card, Table } from "antd";
import InsertUploadMenu from "./InsertUpdateMenu";
const Category = () => {
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [dataCatergory, setCatergory] = React.useState([]);
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
    {
      id: 5,
      title: "Icon",
      dataIndex: "",
    },
    {
      id: 6,
      title: "Trang con",
      dataIndex: "",
    },
  ];
  const onCreateMenu = () => {
    setVisible(true);
  };
  // const GetNameParentMenu = (id, MenuArray)=>{
  //    let a =  MenuArray.find(i=> i.id==id);
  //     return a.nameCategory;
  // }
  // let menu = useSelector(state=>state.Menu);
  // useEffect(()=>{
  //     let b= [];
  //      if(menu)
  // {
  //   menu.forEach((v,i)=>{
  //     console.log(i);
  //     if(v.parentMenu)
  //     {
  //         v={
  //             ...v,
  //             STT: i+1,
  //             parentName: GetNameParentMenu(v.parentMenu,menu),

  //         }
  //         console.log(v);
  //     }
  //     else{
  //         v={
  //             ...v,
  //             STT: i+1,

  //         }
  //     }
  //     b.push(v);
  //   })
  //   console.log(b);
  //   setCatergory(b);

  // }
  // },[menu])
  const colData = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Name",
      dataIndex: "nameCategory",
      key: "nameCategory",
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "File Folder",
      dataIndex: "fileFolder",
      key: "fileFolder",
    },
    {
      title: "Parent Menu",
      dataIndex: "parentName",
      key: "parentName",
    },
  ];
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
            Danh sách Menus
          </span>
          <Button onClick={onCreateMenu} title="Thêm trang">
            Thêm Menu
          </Button>
        </div>
        <div>
          <Table dataSource={[]} columns={columns} />
        </div>
      </Card>
      <InsertUploadMenu visible={visible} setVisible={setVisible} />
    </div>
  );
};
export default Category;
