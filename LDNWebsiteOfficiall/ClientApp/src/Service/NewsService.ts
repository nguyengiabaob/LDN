import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getNews = () => {
  return getApi("/News");
};
export const getNewsDetail = (id: any) => {
  return getApi(`/News/${id}`);
};
export const getNewsHaveImage = () => {
  return getApi("/News/ListNews");
};
export const AddNew = (token: string, data: any) => {
  return postApi(`/News?token=${token}`, data);
};
export const UpdateNews = (id: string, token: string, data: any) => {
  return putApi(`/News/${id}?token=${token}`, data);
};
export const DeleteNews = (token: string, id: string) => {
  return deleteApi(`/News/${id}?token=${token}`);
};
