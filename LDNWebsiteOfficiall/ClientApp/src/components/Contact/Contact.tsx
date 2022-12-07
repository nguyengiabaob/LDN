import { Space } from "antd";
import React from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";

const Contact = () => {
  return (
    <div style={{paddingBottom:'5px'}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }} >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.074987011816!2d106.64092014999999!3d10.999651799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c944cdafb09ce06!2zQ8OUTkcgVFkgVE5ISCBUSEnhur5UIEvhur4gWMOCWSBE4buwTkcgTE9ORyDEkOG6oEkgTkFN!5e0!3m2!1svi!2s!4v1658055143287!5m2!1svi!2s"
          height="400"
          style={{ border: 0, width: "100%" }}
        ></iframe>
         <div >
        <p style={{fontSize:'18px'}}>
        Hãy <span style={{fontWeight:'700',fontSize:'18px'}}> Liên hệ </span> cho chúng tôi theo thông tin bên dưới"
        </p>
      </div>
      <div >
        <p style={{ color:'#edc458',fontSize:'20px', fontWeight:'700'}}> CÔNG TY TNHH  LONG ĐẠI NAM</p>
      </div>
      <div>

      <div>
            <Space  style={{fontSize:'18px',paddingBottom:'5px'}}>
               <RiMapPinLine size={20}/> <span  style={{fontSize:'18px'}}> Điạ chỉ: 81 Phố Lạc Trung, Quận Hai Bà Trưng, Hà Nội</span>
            </Space>
        </div>
        <div>
            <Space  style={{fontSize:'18px',paddingBottom:'5px'}}>
               <IoMailOpenOutline size={20}/> <span  style={{fontSize:'18px'}}>longdainam@gmail.com</span>
            </Space>
        </div>
        <div>
            <Space  style={{fontSize:'18px',paddingBottom:'5px'}}>
               <TbPhoneCall size={20}/> <span  style={{fontSize:'18px'}} > +84(24) 3821 7885</span>
            </Space>
        </div>
      </div>
      </div>
      </div>
     
      
    </div>
  );
};

export default Contact;
