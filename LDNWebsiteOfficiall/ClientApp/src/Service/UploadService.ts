import {
  deleteApi,
  getApi,
  postApi,
  postApiUpload,
  postApiUpload2,
  putApi,
} from "./Client";

export const UploadFile = (token: string, data: any) => {
  return postApiUpload(`/General/UploadFile?token=${token}`, data);
};
export const getUploadImage = (id: any) => {
  return getApi(`/General/${id}`);
};
export const postInsertUpload = (id: any, token: string, data: any) => {
  return postApiUpload2(`/InsertDatas/${id}?token=${token}`, data);
};
