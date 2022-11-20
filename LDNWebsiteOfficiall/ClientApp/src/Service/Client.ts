import axios from "axios";
const baseUrl = "";
const Client = axios.create({
  baseURL: baseUrl + "/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json; charset=utf-8",
    "access-control-allow-origin": "*",
  },
});
const ClientUpload = axios.create({
  baseURL: baseUrl + "/api",
  headers: {
    "Content-type": "multipart/form-data",
    "access-control-allow-origin": "*",
  },
});
const getApi = (url: string) => {
  return Client.get(url);
};
const postApi = (url: string, data: any) => {
  return Client.post(url, data);
};
const putApi = (url: string, data: any) => {
  return Client.put(url, data);
};
const deleteApi = (url: string) => {
  return Client.delete(url);
};

const postApiUpload = (url: string, data: any) => {
  const formdata = new FormData();
  formdata.append("ImgFile", data);
  console.log("formdata", formdata.get("ImgFile"));
  return ClientUpload.post(url, data);
};

const postApiUpload2 = (url: string, data: any) => {
  const formdata = new FormData();
  formdata.append("ImgFile", data);
  console.log("formdata", formdata.get("ImgFile"));
  return ClientUpload.post(url, formdata);
};
export {
  Client,
  getApi,
  postApi,
  deleteApi,
  putApi,
  postApiUpload,
  baseUrl,
  postApiUpload2,
};
