// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/marks';

// export const listMarks = () => axios.get(BASE_URL);
// export const getMark = (id) => axios.get(`http://localhost:8080/api/marks/${id}`);
// export const createMark = (mark) => axios.post(BASE_URL, mark);
// export const updateMark = (id, mark) => axios.put(`${BASE_URL}/${id}`, mark);
// export const deleteMark = (id) => axios.delete(`${BASE_URL}/${id}`);
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/marks';

// // Attach the JWT token to every request
// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };
// };

// // Fetch all marks
// export const listMarks = () => axios.get(BASE_URL, getAuthHeaders());

// // Fetch a single mark by ID
// export const getMark = (id) => axios.get(`${BASE_URL}/${id}`, getAuthHeaders());

// // Create a new mark record
// export const createMark = (mark) => axios.post(BASE_URL, mark, getAuthHeaders());

// // Update a mark record by ID
// export const updateMark = (id, mark) => axios.put(`${BASE_URL}/${id}`, mark, getAuthHeaders());

// // Delete a mark record by ID
// export const deleteMark = (id) => axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const BASE_URL = `${API_BASE_URL}/api/marks`;

// Attach the JWT token to every request
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// Fetch all marks
export const listMarks = () => axios.get(BASE_URL, getAuthHeaders());

// Fetch a single mark by ID
export const getMark = (id) => axios.get(`${BASE_URL}/${id}`, getAuthHeaders());

// Create a new mark record
export const createMark = (mark) => axios.post(BASE_URL, mark, getAuthHeaders());

// Update a mark record by ID
export const updateMark = (id, mark) => axios.put(`${BASE_URL}/${id}`, mark, getAuthHeaders());

// Delete a mark record by ID
export const deleteMark = (id) => axios.delete(`${BASE_URL}/${id}`, getAuthHeaders());