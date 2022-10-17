import { Client, deleteApi, getApi, postApi, putApi } from "./Client";

export const getListMenu = () => {
  return getApi("/Menus");
};
export const getMenusWithUrl = () => {
  return getApi("/Menus/GetMenusWithUrl");
};
export const postMenu = (data: any) => {
  return postApi("/Menus", data);
};
export const deleteMenu = (id: string) => {
  return deleteApi(`/Menus/${id}`);
};
export const UpdateMenu = (id: string, data: any) => {
  return putApi(`/Menus/${id}`, data);
};
