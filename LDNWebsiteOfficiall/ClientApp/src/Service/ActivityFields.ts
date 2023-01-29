import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getfields = () => {
  return getApi("/ActivityFields/FieldsList");
};
export const getfieldsId = (id: any) => {
  return getApi(`/ActivityFields/${id}`);
};
export const Addfields = (token: string, data: any) => {
  return postApi(`/ActivityFields?token=${token}`, data);
};
export const Updatefield = (token: string, id: string, data: any) => {
  return putApi(`/ActivityFields/${id}?token=${token}`, data);
};
export const Deletefield = (token: string, id: string) => {
  return deleteApi(`/ActivityFields/${id}?token=${token}`);
};
