import {
  deleteApi,
  getApi,
  postApi,
  postApiUpload,
  postApiUpload2,
  putApi,
} from "./Client";

export const UploadFile = (data: any) => {
  return postApiUpload(`/General/UploadFile`, data);
};
export const getUploadImage = (id: any) => {
  return getApi(`/General/${id}`);
};
export const postInsertUpload = (data: any, id: any) => {
  return postApiUpload2(`/InsertDatas/${id}`, data);
};
