import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getProjects = () => {
  return getApi("/Projects");
};
export const AddProject = (token: string, data: any) => {
  return postApi(`/Projects?token=${token}`, data);
};
export const UpdateProject = (id: string, token: string, data: any) => {
  return putApi(`/Projects/${id}?token=${token}`, data);
};
export const DeleteProject = (token: string, id: string) => {
  return deleteApi(`/Projects/${id}?token=${token}`);
};
