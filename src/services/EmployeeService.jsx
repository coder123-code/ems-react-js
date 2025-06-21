// import axios from "axios";

// const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

// export const listEmployees = () => {//listemployees()funciton is called in ListEmployeeCompnent
//     return axios.get(REST_API_BASE_URL);
// }
// export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL,employee);
// export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
// export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);
// export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/employees';

// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };
// };

// export const listEmployees = () => axios.get(BASE_URL, getAuthHeaders());

// export const createEmployee = (employee) =>
//   axios.post(BASE_URL, employee, getAuthHeaders());

// export const getEmployee = (id) =>
//   axios.get(`${BASE_URL}/${id}`, getAuthHeaders());

// export const updateEmployee = (id, employee) =>
//   axios.put(`${BASE_URL}/${id}`, employee, getAuthHeaders());

// export const deleteEmployee = (id) =>
//   axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const BASE_URL = `${API_BASE_URL}/api/employees`;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

export const listEmployees = () => axios.get(BASE_URL, getAuthHeaders());

export const createEmployee = (employee) =>
  axios.post(BASE_URL, employee, getAuthHeaders());

export const getEmployee = (id) =>
  axios.get(`${BASE_URL}/${id}`, getAuthHeaders());

export const updateEmployee = (id, employee) =>
  axios.put(`${BASE_URL}/${id}`, employee, getAuthHeaders());

export const deleteEmployee = (id) =>
  axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());
