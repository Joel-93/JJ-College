import axios from "axios";

const API = axios.create({
  baseURL: "https://jj-college-5poa.onrender.com/api",
});

export const loginUser = async (username, password) => {
  const response = await API.post("/auth/login", {
    username,
    password,
  });

  return response.data;
};

export default API;