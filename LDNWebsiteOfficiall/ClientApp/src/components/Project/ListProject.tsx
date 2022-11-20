import { Col, Input, List, Row, Select } from "antd";
import * as Icon from "react-icons/all";
import React, { useEffect, useState } from "react";
import ItemProject from "./ItemProject";
import ProjectDetail from "./ProjectDetail";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../Service/ProjectService";
import { baseUrl } from "../../Service/Client";
const ListProject = () => {
  const navigate = useNavigate();
  // const [visible,setVisible]= useState(false);
  const [ListProjects, setListProjects] = useState<any[]>([]);
  const onClickTitle = () => {
    navigate("/projectDetail/1");

    //    setVisible(true);
  };
  const getListProject = async () => {
    let result = await getProjects();
    console.log("dasdsadsadsa", result);

    if (result && result.data) {
      setListProjects(result.data);
    }
  };
  useEffect(() => {
    getListProject();
  }, []);
  return (
    <div
      style={{ marginBottom: "15px", marginTop: "20px", padding: "0px 15px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "4px",
          flexWrap: "wrap",
        }}
      >
        <Input
          prefix={<Icon.BsSearch name="BsSearch" size={10} />}
          style={{ maxWidth: "300px" }}
          placeholder="Nhập tên dự án"
        />
        <Select
          style={{ width: "300px" }}
          placeholder="Chọn loại dự án"
        ></Select>
      </div>
      <div style={{ padding: "0 25px", marginTop: "25px" }}>
        <Row gutter={[16, 16]}>
          {
            ListProjects &&
              ListProjects.length > 0 &&
              ListProjects.map((x: any) => {
                //     let Arrpath = x.data.split("\\");
                //     console.log('dsadsadsadsad',Arrpath);

                //   x.newPath =  baseUrl +
                // `/${Arrpath[Arrpath.length - 2]}/${
                //   Arrpath[Arrpath.length - 1]
                // }`;

                return (
                  <Col lg={12} md={24}>
                    <ItemProject ProjectData={x} onclickTitle={onClickTitle} />
                  </Col>
                );
              })

            //  <Col lg= {12} md={24}>
            //      <ItemProject onclickTitle={onClickTitle}/>
            //  </Col>
            //  <Col lg= {12} md={24}>
            //  <ItemProject onclickTitle={onClickTitle}/>
            //  </Col>
          }
        </Row>
      </div>
    </div>
  );
};
export default ListProject;
