import React, { Component, useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
  Switch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./scss/style.scss";
import "antd/dist/antd.css";
import DefaultLayout from "./layout/DefaultLayout";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// // Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const location = useLocation();
  const url = location.pathname;
  // console.log("123123123");
  useEffect(() => {
    console.log("dasdasdasdasd456789", url);
    token
      ? navigate(url)
      : navigate("/LDN/admin/login", { state: { oldUrl: url } });
  }, []);

  return (
    <React.Suspense fallback={loading}>
      <Routes>
        <Route path="/*" element={<DefaultLayout />} />
        <Route path="/login" name="Login Page" element={<Login />} />
        <Route path="/register" name="Register Page" element={<Register />} />
        {/* <Route path="*" name="Page 404" element={<Page404 />} /> */}
        <Route path="/page404" name="Page 404" element={<Page404 />} />
        {/* <Route path="/500" name="Page 500" element={<Page500 />} /> */}
      </Routes>
    </React.Suspense>
  );
};

export default App;
