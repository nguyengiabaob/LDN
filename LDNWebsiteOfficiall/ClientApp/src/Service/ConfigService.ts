import {
  deleteApi,
  getApi,
  postApi,
  postApiUpload,
  postApiUpload2,
  putApi,
} from "./Client";

export const PostSetting = (token: string, data: any) => {
  return postApi(`/Configs?token=${token}`, data);
};
export const getSetting = (type: string) => {
  return getApi(`/Configs/getSettingByType?type=${type}`);
};
export const UpdateSetting = (id: any, token: string, data: any) => {
  return putApi(`/Configs/${id}?token=${token}`, data);
};
