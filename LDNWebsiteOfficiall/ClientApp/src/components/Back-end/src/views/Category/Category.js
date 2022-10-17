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
import { Button, Card, message, Table } from "antd";
import InsertUploadMenu from "./InsertUpdateMenu";
import {
  deleteMenu,
  getMenusWithUrl,
} from "../../../../../Service/MenuService";
import { BiEdit } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
const Category = () => {
  const [loading, setLoading] = React.useState(false);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [dataCatergory, setCatergory] = React.useState([]);
  const [dataUpdate, setdataUpdate] = React.useState();
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(true);
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
    // {
    //   id: 3,
    //   title: "File Folder",
    //   dataIndex: "",
    // },
    {
      id: 4,
      title: "Url",
      dataIndex: "url",
    },
    // {
    //   id: 5,
    //   title: "Icon",
    //   dataIndex: "",
    // },
    {
      id: 6,
      title: "Trang Cha",
      dataIndex: "parentName",
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
                setdataUpdate(row);
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
  const onCreateMenu = () => {
    setRefresh(false);
    setVisible(true);
  };
  const getMenusList = () => {
    getMenusWithUrl().then((res) => {
      if (res && res.data.length > 0) {
        res.data.forEach((x, index) => {
          x["stt"] = index + 1;
        });

        setCatergory(res.data);
      }
    });
  };
  useEffect(() => {
    if (refresh == true) {
      getMenusList();
    }
  }, [refresh]);

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
  const onDelete = (id) => {
    message.loading({
      duration: 5,
      content: "Loading",
    });
    deleteMenu(id)
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
            Danh sách Menus
          </span>
          <Button onClick={onCreateMenu} title="Thêm trang">
            Thêm Menu
          </Button>
        </div>
        <div>
          <Table dataSource={dataCatergory} columns={columns} />
        </div>
      </Card>
      <InsertUploadMenu
        onRefresh={setRefresh}
        dataUpdate={dataUpdate}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};
export default Category;
