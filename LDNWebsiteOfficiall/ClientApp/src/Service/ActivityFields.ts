import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getfields = () => {
  return getApi("/ActivityFields/FieldsList");
};
export const Addfields = (data: any) => {
  return postApi(`/ActivityFields`, data);
};
export const Updatefield = (id: string, data: any) => {
  return putApi(`/ActivityFields/${id}`, data);
};
export const Deletefield = (id: string) => {
  return deleteApi(`/ActivityFields/${id}`);
};
