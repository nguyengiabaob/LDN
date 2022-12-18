import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { Button, Form, Input, message } from "antd";
import { onEegisterAccount } from "../../../../../../Service/AuthService";
import { useNavigate } from "react-router-dom";
import { useForm } from "antd/lib/form/Form";

const Register = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <Form
                  form={form}
                  className="form-res"
                  onFinish={async (value) => {
                    message.loading({
                      duration: 2,
                    });
                    let result = await onEegisterAccount(value);
                    if (result && result.status == 200) {
                      message.destroy();
                      message.success({
                        duration: 2,
                        content: "Tạo tài khoản thành công",
                      });
                      navigate("/LDN/admin/login");
                    }
                  }}
                >
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <Form.Item name={"username"}>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                      />
                      {/* <Input /> */}
                    </Form.Item>
                    {/* <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                    /> */}
                  </CInputGroup>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <Form.Item style={{ height: "100%" }} name={"password"}>
                      {/* <Input type="password" /> */}
                      <CFormInput type="password" placeholder="Password" />
                    </Form.Item>
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <Form.Item name={"repeatpassword"}>
                      <CFormInput
                        type="repeatpassword"
                        placeholder="Repeat Password"
                      />
                    </Form.Item>
                  </CInputGroup>
                  <div className="d-grid">
                    <Button htmlType="submit" color="success">
                      Create Account
                    </Button>
                  </div>
                </Form>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
