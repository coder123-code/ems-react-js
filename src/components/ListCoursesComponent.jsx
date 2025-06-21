// import React, { useEffect, useState } from 'react';
// import { listCourses } from '../services/CourseService';
// import { listEmployees } from '../services/EmployeeService';
// import { deleteCourse } from '../services/CourseService';
// import { useNavigate } from 'react-router-dom';

// const ListCoursesComponent = () => {
//     const [courses, setCourses] = useState([]);
//     const [employees, setEmployees] = useState([]);
//     const navigator = useNavigate();

//     useEffect(() => {
//         getAllCourses();
//         getAllEmployees();
//     }, []);

//     function getAllCourses() {
//         listCourses().then((response) => {
//             setCourses(response.data);
//         }).catch(error => {
//             console.error(error);
//         });
//     }

//     function getAllEmployees() {
//         listEmployees().then((response) => {
//             setEmployees(response.data);
//         }).catch(error => {
//             console.error(error);
//         });
//     }
//       function removeCourse(id) {
//             console.log(id);
            
//             if (window.confirm('Are you sure you want to delete this course')) {
//                 deleteCourse(id).then((response) => {
//                     getAllCourses(); // Refresh the list
//                     alert('Course deleted successfully!');
//                 }).catch(error => {
//                     console.error(error);
//                     alert('Error deleting course!');
//                 });
//             }
//         }

//     function getEnrolledStudents(courseCode) {
//         return employees.filter(employee => employee.courseCode === courseCode);
//     }

//     function addNewCourse() {
//         navigator('/add-course');
//     }

//     function updateCourse(id) {
//         navigator(`/edit-course/${id}`);
//     }

//     return (
//         <div className='container'>
//             <h2 className='text-center'>List of Courses</h2>
//             <button className='btn btn-primary' onClick={addNewCourse}>
//                 Add Course
//             </button>
            
//             <table className='table table-striped table-bordered'>
//                 <thead>
//                     <tr>
//                         <th>Course Id</th>
//                         <th>Course Name</th>
//                         <th>Course Code</th>
//                         <th>Course Description</th>
//                         <th>Teacher</th>
//                         <th>Enrolled Students</th>

//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         courses.map(course => {
//                             const enrolledStudents = getEnrolledStudents(course.courseCode);
//                             return (
//                                 <tr key={course.id}>
//                                     <td>{course.id}</td>
//                                     <td>{course.courseCode}</td>
//                                     <td>{course.courseDescription}</td>
//                                     <td>{course.courseName}</td>
//                                     <td>{course.teacher}</td>
//                                     <td>
//                                         {enrolledStudents.length > 0 ? (
//                                             <div>
//                                                 {enrolledStudents.map((student, index) => (
//                                                     <div key={student.id} className="mb-1">
//                                                         <small>
//                                                             <strong>ID:</strong> {student.id} | 
//                                                             <strong> Name:</strong> {student.firstName} {student.lastName} | 
//                                                             <strong> Email:</strong> {student.email}
//                                                         </small>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         ) : (
//                                             <span className="text-muted">No students enrolled</span>
//                                         )}
//                                     </td>
//                                     <td>
//                                         <button 
//                                             className='btn btn-info me-2' 
//                                             onClick={() => updateCourse(course.id)}
//                                         >
//                                             Update
//                                         </button>
//                                         <button 
//                                         className='btn btn-danger' 
//                                         onClick={() => removeCourse(course.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                     </td>

//                                 </tr>
//                             );
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListCoursesComponent;
import React, { useEffect, useState } from 'react';
import { listCourses } from '../services/CourseService';
import { listEmployees } from '../services/EmployeeService';
import { deleteCourse } from '../services/CourseService';
import { useNavigate } from 'react-router-dom';

const ListCoursesComponent = () => {
    const [courses, setCourses] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        getAllCourses();
        getAllEmployees();
    }, []);

    function getAllCourses() {
        listCourses().then((response) => {
            setCourses(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function removeCourse(id) {
        if (window.confirm('Are you sure you want to delete this course')) {
            deleteCourse(id).then(() => {
                getAllCourses(); // Refresh the list
                alert('Course deleted successfully!');
            }).catch(error => {
                console.error(error);
                alert('Error deleting course!');
            });
        }
    }

    function getEnrolledStudents(courseCode) {
        return employees.filter(employee => employee.courseCode === courseCode);
    }

    function addNewCourse() {
        navigator('/add-course');
    }

    function updateCourse(id) {
        navigator(`/edit-course/${id}`);
    }

    // 🔍 Filter courses by course name, code, or teacher
    const filteredCourses = courses.filter(course =>
        course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <h2 className='text-center'>List of Courses</h2>

            {/* 🔍 Search + Add Button */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-6 text-end">
                    <button className='btn btn-primary' onClick={addNewCourse}>
                        Add Course
                    </button>
                </div>
            </div>

            <table className='table table-bordered shadow'>
                <thead className="table-secondary">
                    <tr>
                        <th>Course Id</th>
                        <th>Course Name</th>
                        <th>Course Code</th>
                        <th>Course Description</th>
                        <th>Teacher</th>
                        <th>Enrolled Students</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredCourses.map(course => {
                            const enrolledStudents = getEnrolledStudents(course.courseCode);
                            return (
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.courseName}</td>
                                    <td>{course.courseCode}</td>
                                    <td>{course.courseDescription}</td>
                                    <td>{course.teacher}</td>
                                    <td>
                                        {enrolledStudents.length > 0 ? (
                                            enrolledStudents.map(student => (
                                                <div key={student.id} className="mb-1">
                                                    <small>
                                                        <strong>ID:</strong> {student.id} |
                                                        <strong> Name:</strong> {student.firstName} {student.lastName} |
                                                        <strong> Email:</strong> {student.email}
                                                    </small>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="text-muted">No students enrolled</span>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-info me-2'
                                            onClick={() => updateCourse(course.id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => removeCourse(course.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListCoursesComponent;

