import { Client, deleteApi, getApi, postApi, putApi } from "./Client";

export const getListMenu = () => {
  return getApi("/Menus");
};
export const getMenusWithUrl = () => {
  return getApi("/Menus/GetMenusWithUrl");
};
export const postMenu = (token: string, data: any) => {
  return postApi(`/Menus?token=${token}`, data);
};
export const deleteMenu = (token: string, id: string) => {
  return deleteApi(`/Menus/${id}?token=${token}`);
};
export const UpdateMenu = (token: string, id: string, data: any) => {
  return putApi(`/Menus/${id}?token=${token}`, data);
};
