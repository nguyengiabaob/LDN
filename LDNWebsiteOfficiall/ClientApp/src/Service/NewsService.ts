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
export const AddNew = (data: any) => {
  return postApi(`/News`, data);
};
export const UpdateNews = (id: string, data: any) => {
  return putApi(`/News/${id}`, data);
};
export const DeleteNews = (id: string) => {
  return deleteApi(`/News/${id}`);
};
