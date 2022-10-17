import { Dropdown, Image, Menu, Space } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { getListMenu, getMenusWithUrl } from "../../Service/MenuService";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  let navigate = useNavigate();
    const [listMenu,setListMenu]= useState<any>([]);
    useEffect(()=>{
      getMenusWithUrl().then(res=>{
        console.log('Menus',res.data);
        setListMenu(res.data);
      })
    },[])
    // const menu = (
    //     <Menu
    //       items={[
    //         {
    //           key: '1',
    //           label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //               1st menu item
    //             </a>
    //           ),
    //         },
    //         {
    //           key: '2',
    //           label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //               2nd menu item (disabled)
    //             </a>
    //           ),
    //           icon: <SmileOutlined translate={undefined} />,
    //           disabled: true,
    //         },
    //         {
    //           key: '3',
    //           label: (
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //               3rd menu item (disabled)
    //             </a>
    //           ),
    //           disabled: true,
    //         },
    //         {
    //           key: '4',
    //           danger: true,
    //           label: 'a danger item',
    //         },
    //       ]}
    //     />
    //   ); 

    return (
        <nav className="border-menu custom-nav" >
        <div style={{ marginLeft:'15%',display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Image preview={false}  width={212} height={70} src="/Images/logo.png" />
        </div>
            <Menu
                className="custom-menu"
                mode="horizontal" 
                
                defaultSelectedKeys={['1']}

            >
              {listMenu.filter((i:any)=>i.parentMenu == null).map((x:any)=>{
                  console.log(x);
                  
                  let items:any[] = [];
                  let MenuChild :any;
                  let childmenu = listMenu.filter((menu:any)=> menu.parentMenu !== null &&  menu.parentMenu == x.id )
                  if( childmenu.length > 0)
                  {
                    childmenu.forEach((i:any,index:number)=>{
                      let item = {
                        
                          key: i.id,
                          label: (
                            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                              {i.name}
                            </a>
                          ),
                        
                      }
                      items.push(item);
                    });
                    MenuChild= (
                      <Menu items={items}/> 

                    )
                  }
                  return (
                    
                      childmenu.length > 0 ? 
                      ( <Menu.Item key={x.id}  className="menu-font">
                      <Dropdown  overlayClassName="ldn-custtom-overplay" overlay={MenuChild}>
                      <Space>
                          {x.name}
                      <DownOutlined translate={undefined} />
                      </Space>
                      </Dropdown>
                  </Menu.Item>)
                   :
                   <Menu.Item onClick={()=>{
                    navigate(x.url);
                   }} key={x.id}  className="menu-font">
                   {
                     x.name
                   }
                </Menu.Item> 
                    
                  )
              })}
            {/* <Menu.Item  className="menu-font">
                Trang chủ
            </Menu.Item>
            
            <Menu.Item  className="menu-font">
                <Dropdown overlay={menu}>
                <Space>
                    Giới thiệu
                <DownOutlined translate={undefined} />
                </Space>
                </Dropdown>
            </Menu.Item> */}
            {/* <Menu.SubMenu className="menu-font" key="SubMenu" title="Giới thiệu" >
                <Menu.Item >
                    Giới thiệu 
                </Menu.Item>
            </Menu.SubMenu> */}
           
            {/* <Menu.Item className="menu-font">
               Lĩnh vực
            </Menu.Item >
            <Menu.Item className="menu-font">
                Dự Án
            </Menu.Item>
            <Menu.Item className="menu-font">
                Liên hệ
            </Menu.Item> */}
         
            </Menu>
        </nav>
        );
}
export default Nav;
