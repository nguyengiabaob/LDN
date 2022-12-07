import { Button, Card, message, Table } from 'antd';
import moment from 'moment';
import React, {useState,useEffect} from 'react'
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { baseUrl } from '../../../../../Service/Client';
import { DeleteNews, getNews } from '../../../../../Service/NewsService';
import { getUploadImage } from '../../../../../Service/UploadService';
import InsertUploadProjects from '../Projects/InsertuploadProject';
import InsertUploadNews from './InsertUploadNews';
const ListNews = () => {
  const [ListNews, setListNews] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [news, setNews] = useState ();
  const [refresh, setRefresh] = useState(true);
  const columns = [
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "owner",
    },
    {
      title: "Người tạo",
      dataIndex: "createBy",
      key: "name",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createDate",
      key: "createDate",
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
                setNews(dataRow);
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
  const getListNews = async () => {
    let dataNews = await getNews();
    if (dataNews) {
      setIsLoading(false);
      console.log("dataProject", dataNews.data);
      setListNews(dataNews.data);
    }
  };
  const onCreateProject = () => {
    setVisible(true);
  };
  useEffect(() => {
    if (refresh == true) {
      setIsLoading(true);
      getListNews();
    }
  }, [refresh]);
  const onDelete = (id:any) => {
    message.loading({
      duration: 5,
      content: "Loading",
    });
    DeleteNews(id)
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
            Danh sách tin tức
          </span>
          <Button onClick={onCreateProject} title="Thêm trang">
            Thêm tin tức
          </Button>
        </div>
        <div>
          <Table
            loading={isLoading}
            dataSource={ListNews ? ListNews : []}
            columns={columns}
          />
        </div>
      </Card>
      <InsertUploadNews                           
        onRefresh={setRefresh}
        dataUpdate={news}
        visible={visible}
        onvisible={setVisible}
      />
    </div>
  );
}

export default ListNews