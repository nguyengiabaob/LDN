import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getProjects = () => {
  return getApi("/Projects");
};
export const AddProject = (data: any) => {
  return postApi(`/Projects`, data);
};
export const UpdateProject = (id: string, data: any) => {
  return putApi(`/Projects/${id}`, data);
};
export const DeleteProject = (id: string) => {
  return deleteApi(`/Projects/${id}`);
};
