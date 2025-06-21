// import axios from "axios";

// const REST_API_BASE_URL = 'http://localhost:8080/api/courses';

// export const listCourses = () => {
//     return axios.get(REST_API_BASE_URL);
// }

// export const createCourse = (course) => axios.post(REST_API_BASE_URL, course);

// export const getCourse = (courseId) => axios.get(REST_API_BASE_URL + '/' + courseId);

// export const updateCourse = (courseId, course) => axios.put(REST_API_BASE_URL + '/' + courseId, course);

// export const deleteCourse = (courseId) => axios.delete(REST_API_BASE_URL + '/' + courseId);
// import axios from 'axios';

// const BASE_URL = 'http://localhost:8080/api/courses';

// // Helper to include JWT token in all requests
// const getAuthHeaders = () => {
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   };
// };

// // List all courses
// export const listCourses = () => axios.get(BASE_URL, getAuthHeaders());

// // Create a new course
// export const createCourse = (course) => axios.post(BASE_URL, course, getAuthHeaders());

// // Get a specific course by ID
// export const getCourse = (courseId) => axios.get(`${BASE_URL}/${courseId}`, getAuthHeaders());

// // Update a course by ID
// export const updateCourse = (courseId, course) => axios.put(`${BASE_URL}/${courseId}`, course, getAuthHeaders());

// // Delete a course by ID
// export const deleteCourse = (courseId) => axios.delete(`${BASE_URL}/${courseId}`, getAuthHeaders());
import axios from 'axios';

// Use environment variable for API URL, fallback to localhost for development
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
const BASE_URL = `${API_BASE_URL}/api/courses`;

// Helper to include JWT token in all requests
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
};

// List all courses
export const listCourses = () => axios.get(BASE_URL, getAuthHeaders());

// Create a new course
export const createCourse = (course) => axios.post(BASE_URL, course, getAuthHeaders());

// Get a specific course by ID
export const getCourse = (courseId) => axios.get(`${BASE_URL}/${courseId}`, getAuthHeaders());

// Update a course by ID
export const updateCourse = (courseId, course) => axios.put(`${BASE_URL}/${courseId}`, course, getAuthHeaders());

// Delete a course by ID
export const deleteCourse = (courseId) => axios.delete(`${BASE_URL}/${courseId}`, getAuthHeaders());
