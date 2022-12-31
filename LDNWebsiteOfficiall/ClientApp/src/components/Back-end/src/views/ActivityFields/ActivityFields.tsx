import { Button, Card, message, Table } from 'antd';
import moment from 'moment';
import React, {useEffect, useState} from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { Deletefield, getfields } from '../../../../../Service/ActivityFields';
import { baseUrl } from '../../../../../Service/Client';
import { getUploadImage } from '../../../../../Service/UploadService';

const ActivityFields = () => {
  const [FieldstLists, setFieldstLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [Project, setProject] = useState();
  const [refresh, setRefresh] = useState(true);
  const columns = [
    {
      title: "Tên lĩnh vực",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Ngày tạo",
      dataIndex: "dateCreate",
      key: "dateCreate",
      render: (value:any) => <span>{value ? moment(value).format('DD/MM/YYYY'): ""}</span>,
    },
    {
      title: "Người tạo",
      dataIndex: "createdBy",
      key: "createdBy",
      render: (value:any) => <span>{value ? value: ""}</span>,
    },
    {
      title: "",
      dataIndex: "Action",
      key: "Action",
      render: (value:any, row:any) => {
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
                setProject(dataRow);
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
  const getProjectList = async () => {
    let dataFields = await getfields();
    if (dataFields) {
      setIsLoading(false);
      console.log("dataProject", dataFields.data);
      setFieldstLists(dataFields.data);
    }
  };
  const onCreateProject = () => {
    setVisible(true);
  };
  useEffect(() => {
    if (refresh == true) {
      setIsLoading(true);
      getProjectList();
    }
  }, [refresh]);
  const onDelete = (id:any) => {
    message.loading({
      duration: 5,
      content: "Loading",
    });
    Deletefield  (id)
      .then((res) => {
        message.destroy();
        message.success({
          duration: 5,
          content: "Dự án đã dược xóa",
        });
        setRefresh(true);
      })
      .catch((e) => {
        message.destroy();
        message.loading({
          duration: 5,
          content: "Dự án chưa được dược xóa",
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
            Danh sách dự án
          </span>
          <Button onClick={onCreateProject} title="Thêm trang">
            Thêm dự án
          </Button>
        </div>
        <div>
          <Table
            loading={isLoading}
            dataSource={FieldstLists ? FieldstLists : []}
            columns={columns}
          />
        </div>
      </Card>
      {/* <InsertUploadProjects
        onRefresh={setRefresh}
        dataUpdate={Project}
        visible={visible}
        onvisible={setVisible}
      /> */}
    </div>
  );
}

export default ActivityFields