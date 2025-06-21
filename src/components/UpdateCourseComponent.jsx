import React, { useEffect, useState } from 'react'
import { getCourse, updateCourse } from '../services/CourseService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCourseComponent = () => {
    const [courseName, setCourseName] = useState('')
    const [teacher, setTeacher] = useState('')
    const[courseCode,setCourseCode]=useState('')
    const[courseDescription,setCourseDescription]=useState('')
    
    const navigator = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getCourse(id).then((response) => {
                setCourseName(response.data.courseName);
                setTeacher(response.data.teacher);
                setCourseCode(response.data.courseCode);
                setCourseDescription(response.data.courseDescription);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function handleCourseName(e) {
        setCourseName(e.target.value);
    }
    function handleTeacher(e) {
        setTeacher(e.target.value);
    }
    function handleCourseCode(e){
        setCourseCode(e.target.value);
    }
    function handleCourseDescription(e){
        setCourseDescription(e.target.value);
    }


    function updateCourseData(e) {
        e.preventDefault();
        const course = { courseName,courseCode,courseDescription, teacher }
        console.log(course)
        updateCourse(id, course).then((response) => {
            console.log(response.data);
            navigator('/courses')
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-centre'>Update Course</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Course Name:</label>
                                <input
                                    type='text'
                                    placeholder='enter course name'
                                    name='courseName'
                                    value={courseName}
                                    className='form-control'
                                    onChange={handleCourseName}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Course Code:</label>
                                <input
                                    type='text'
                                    placeholder='enter course Code'
                                    name='courseCode'
                                    value={courseCode}
                                    className='form-control'
                                    onChange={handleCourseCode}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Course Description:</label>
                                <input
                                    type='text'
                                    placeholder='enter course Description'
                                    name='courseDescription'
                                    value={courseDescription}
                                    className='form-control'
                                    onChange={handleCourseDescription}
                                ></input>
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Teacher:</label>
                                <input
                                    type='text'
                                    placeholder='enter teacher name'
                                    name='teacher'
                                    value={teacher}
                                    className='form-control'
                                    onChange={handleTeacher}
                                ></input>
                            </div>

                            <button className='btn btn-success' onClick={updateCourseData}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateCourseComponent;