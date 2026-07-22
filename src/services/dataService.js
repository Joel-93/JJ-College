import API from "./authService";

export const getStudentDashboard = async () => {
  const token = localStorage.getItem("token");
  const response = await API.get("/student/dashboard", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const getFacultyDashboard = async () => {
  const token = localStorage.getItem("token");
  const response = await API.get("/faculty/dashboard", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
