import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getPages = () => {
  return getApi("/Pages");
};
export const AddPage = (data: any) => {
  return postApi(`/Pages`, data);
};
export const UpdatePage = (id: string, data: any) => {
  return putApi(`/Pages/${id}`, data);
};
export const DeletePage = (id: string) => {
  return deleteApi(`/Pages/${id}`);
};
