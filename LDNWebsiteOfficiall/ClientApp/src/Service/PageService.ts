import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getPages = () => {
  return getApi("/Pages");
};
export const getPagesById = (id: any) => {
  return getApi(`/Pages/${id}`);
};
export const AddPage = (token: string, data: any) => {
  return postApi(`/Pages?token=${token}`, data);
};
export const UpdatePage = (id: string, token: string, data: any) => {
  return putApi(`/Pages/${id}?token=${token}`, data);
};
export const DeletePage = (token: string, id: string) => {
  return deleteApi(`/Pages/${id}?token=${token}`);
};
