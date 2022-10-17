import { deleteApi, getApi, postApi, putApi } from "./Client";

export const getProjects = () => {
  return getApi("/Project");
};
export const AddProject = (data: any) => {
  return postApi(`/Project`, data);
};
export const UpdateProject = (id: string, data: any) => {
  return putApi(`/Project/${id}`, data);
};
export const DeleteProject = (id: string) => {
  return deleteApi(`/Project/${id}`);
};
