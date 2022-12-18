import { deleteApi, getApi, postApi, putApi } from "./Client";

export const onEegisterAccount = (data: any) => {
  return postApi("/Auth/registerAccount", data);
};
export const onLogin = (data: any) => {
  return postApi(`/Auth/login`, data);
};
