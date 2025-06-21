import React, { useEffect, useState } from 'react';
import { createMark } from '../services/MarkService';
import { listEmployees } from '../services/EmployeeService';
import { listCourses } from '../services/CourseService';
import { useNavigate } from 'react-router-dom';

const AddMarksComponent = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [score, setScore] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        listEmployees().then(res => setStudents(res.data));
        listCourses().then(res => setCourses(res.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = students.find(s => s.id == selectedStudent);
        const course = courses.find(c => c.id == selectedCourse);
        const mark = { score: parseInt(score), student, course };

        createMark(mark).then(() => navigate('/marks')).catch(console.error);
    };

    return (
        <div className='container'>
            <h2 className='text-center mt-3'>➕ Add Marks</h2>
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
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    );
};

export default AddMarksComponent;