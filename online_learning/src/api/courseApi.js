import axiosClient from "./axiosClient";

const courseApi = {
  getAll: (params) => {
    const url = "/course";
    return axiosClient.get(url, { params });
  },
};
export default courseApi;
