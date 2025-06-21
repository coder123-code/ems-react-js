// import React, { useEffect, useState } from 'react';
// import { getMark, updateMark } from '../services/MarkService';
// import { useNavigate, useParams } from 'react-router-dom';

// const UpdateMarkComponent = () => {
//     const [score, setScore] = useState('');
//     const navigate = useNavigate();
//     const { id } = useParams();

//     useEffect(() => {
//         getMark(id).then(response => {
//             setScore(response.data.score);
//         }).catch(error => {
//             console.error('Error fetching mark:', error);
//         });
//     }, [id]);

//     const handleScoreChange = (e) => {
//         setScore(e.target.value);
//     };

//     const updateMarkData = (e) => {
//         e.preventDefault();
//         const mark = { score: parseInt(score) }; // Assuming student and course remain unchanged
//         updateMark(id, mark)
//             .then(() => navigate('/marks'))
//             .catch(error => console.error('Error updating mark:', error));
//     };

//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='card col-md-6 offset-md-3 offset-md-3'>
//                     <h2 className='text-center mt-3'>✏️ Update Mark</h2>
//                     <div className='card-body'>
//                         <form onSubmit={updateMarkData}>
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>Score:</label>
//                                 <input
//                                     type='number'
//                                     placeholder='Enter score'
//                                     value={score}
//                                     className='form-control'
//                                     onChange={handleScoreChange}
//                                     required
//                                     min="0"
//                                     max="100"
//                                 />
//                             </div>
//                             <button className='btn btn-success'>Update</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateMarkComponent;

// UpdateMarksComponent.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMark, updateMark } from '../services/MarkService';
import { listEmployees } from '../services/EmployeeService';
import { listCourses } from '../services/CourseService';

const UpdateMarkComponent = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [score, setScore] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        listEmployees().then(res => setStudents(res.data));
        listCourses().then(res => setCourses(res.data));
        getMark(id).then(res => {
            const mark = res.data;
            setScore(mark.score);
            setSelectedStudent(mark.student.id);
            setSelectedCourse(mark.course.id);
        });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = students.find(s => s.id == selectedStudent);
        const course = courses.find(c => c.id == selectedCourse);
        const mark = {
            id: parseInt(id),
            score: parseInt(score),
            student,
            course
        };

        updateMark(id, mark).then(() => navigate('/marks')).catch(console.error);
    };

    return (
        <div className='container'>
            <h2 className='text-center mt-3'>✏️ Update Mark</h2>
            <form onSubmit={handleSubmit} className='mt-4'>
                <div className='mb-3'>
                    <label className='form-label'>Student</label>
                    <select className='form-select' value={selectedStudent} onChange={e => setSelectedStudent(e.target.value)} required>
                        <option value=''>-- Select Student --</option>
                        {students.map(s => (
                            <option key={s.id} value={s.id}>{s.firstName} {s.lastName}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Course</label>
                    <select className='form-select' value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)} required>
                        <option value=''>-- Select Course --</option>
                        {courses.map(c => (
                            <option key={c.id} value={c.id}>{c.courseName}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Score</label>
                    <input type='number' min='0' max='100' className='form-control' value={score} onChange={e => setScore(e.target.value)} required />
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    );
};

export default UpdateMarkComponent;

