import axios from "axios";
const baseUrl = "";
const Client = axios.create({
  baseURL: baseUrl + "/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json charset=utf-8",
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
export { Client, getApi, postApi, deleteApi, putApi };
