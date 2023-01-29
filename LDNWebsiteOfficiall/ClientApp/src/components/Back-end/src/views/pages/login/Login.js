import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { Button, Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { onLogin } from "../../../../../../Service/AuthService";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [form] = useForm();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("dsadsadsad", state?.odlUrl);
      state?.odlUrl && navigate(state?.odlUrl);
      // : navigate("/LDN/admin/dashboard");
    }
  }, [localStorage.getItem("token")]);
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Form
                    className="form-res"
                    onFinish={async (val) => {
                      let result = await onLogin(val);
                      if (result && result.data && result.status == 200) {
                        console.log("toppjken", result.data);
                        console.log("toppjken", state?.oldUrl);
                        localStorage.setItem("token", result.data);
                        state
                          ? navigate(state?.oldUrl)
                          : navigate("/LDN/admin/dashboard");
                      }
                    }}
                    form={form}
                  >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <Form.Item name={"username"}>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                        />
                      </Form.Item>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <Form.Item name={"password"}>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </Form.Item>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <Button
                          htmlType="submit"
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </Button>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </Form>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p> */}
                    <Link to="/LDN/admin/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
