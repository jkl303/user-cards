import axios from "axios";

axios.defaults.baseURL = `https://644a582d79279846dce59e1c.mockapi.io/api/`;

export const fetchUsers = async (page = 1, limit = 3) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=${limit}`);
    return response;
  } catch (e) {
    return e.message;
  }
};
