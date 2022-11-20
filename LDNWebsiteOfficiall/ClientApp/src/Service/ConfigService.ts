import {
  deleteApi,
  getApi,
  postApi,
  postApiUpload,
  postApiUpload2,
  putApi,
} from "./Client";

export const PostSetting = (data: any) => {
  return postApi(`/Configs`, data);
};
export const getSetting = (type: string) => {
  return getApi(`/Configs/getSettingByType?type=${type}`);
};
