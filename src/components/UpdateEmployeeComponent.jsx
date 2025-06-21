// 
import React, { useEffect, useState } from 'react'
import { getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [courseCode, setCourseCode] = useState('')
    const navigator = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {// 'getEmployee' fun defined in 'EmployeeService.jsx'
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setCourseCode(response.data.courseCode);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handleCourseCode(e) {
        setCourseCode(e.target.value);
    }

    function updateEmployeeData(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email, courseCode }
        console.log(employee)
        updateEmployee(id, employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-centre'>Update Student</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='enter student first Name'
                                    name='firstName'
                                    value={firstName}
                                    className='form-control'
                                    onChange={handleFirstName}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='enter student last Name'
                                    name='lastName'
                                    value={lastName}
                                    className='form-control'
                                    onChange={handleLastName}
                                ></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-mail:</label>
                                <input
                                    type='text'
                                    placeholder='enter student email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={handleEmail}
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
                            <button className='btn btn-success' onClick={updateEmployeeData}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployeeComponent;
