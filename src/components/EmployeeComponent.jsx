// import React ,{ useEffect, useState } from 'react'
// import { createEmployee } from '../services/EmployeeService'
// import { useNavigate } from 'react-router-dom'


// const EmployeeComponent = () => {
// const[firstName,setFirstName]=useState('')
// const[lastName,setLastName]=useState('')
// const[email,setEmail]=useState('')
// const [courseId, setCourseId] = useState('')
// const navigator=useNavigate();

// function handleFirstName(e)
// {
//     setFirstName(e.target.value);
// }
// function handleLastName(e)
// {
//     setLastName(e.target.value);
// }
// function handleEmail(e)
// {
//     setEmail(e.target.value);
// }
// function saveEmployee(e){
//     e.preventDefault();
//     const employee={firstName,lastName,email}//we r creating a object 'employee'.'firstName' is a state variable so the user entered firstname will be stored in 'firstName'
//     console.log(employee)//employee={'firstName':deepika,'lastName':swaminathan}
//     createEmployee(employee).then((response)=>{
//         console.log(response.data);
//         navigator('/employees')
//     })//this function createEmployee is called which is present in 'EmployeeService'.we pass response.data that is the objectlike this {'firstName':deepika,'lastName':swaminathan}.now it will go for postmapping.in the springboot when data is given lke this in json format,it gets stored in datatasbe.so thats why after this statement it gets stored in database
    
// }

//   return (
//     <div className='container'>
//         <br></br>
//         <div className='row'>
//             <div className='card col-md-6 offset-md-3 offset-md-3'>
//                 <h2 className='text-centre'>Add Student</h2>
//                 <div className='card-body'>
//                     <form>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>First Name:</label>
//                             <input
//                               type='text'
//                               placeholder='enter student first Name'
//                               name='firstName'
//                               value={firstName}
//                               className='form-control'
//                               onChange={handleFirstName}
//                               ></input>
//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>Last Name:</label>
//                             <input
//                               type='text'
//                               placeholder='enter student last Name'
//                               name='lastName'
//                               value={lastName}
//                               className='form-control'
//                               onChange={handleLastName}
//                               ></input>
//                         </div>
//                         <div className='form-group mb-2'>
//                             <label className='form-label'>E-mail:</label>
//                             <input
//                               type='text'
//                               placeholder='enter student email'
//                               name='email'
//                               value={email}
//                               className='form-control'
//                               onChange={handleEmail}
//                               ></input>
//                         </div>
//                         <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     </div>

//   );
// }

// export default EmployeeComponent;
// import React, { useEffect, useState } from 'react'
// import { createStudent } from '../services/StudentService'
// import { useNavigate } from 'react-router-dom'

// const EmployeeComponent = () => {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [courseId, setCourseId] = useState('')
//     const navigator = useNavigate();

//     function handleFirstName(e) {
//         setFirstName(e.target.value);
//     }
//     function handleLastName(e) {
//         setLastName(e.target.value);
//     }
//     function handleEmail(e) {
//         setEmail(e.target.value);
//     }
//     function handleCourseId(e) {
//         setCourseId(e.target.value);
//     }

//     function saveStudent(e) {
//         e.preventDefault();
//         const student = { firstName, lastName, email, courseId }
//         console.log(student)
//         createStudent(student).then((response) => {
//             console.log(response.data);
//             navigator('/students')
//         })
//     }

//     return (
//         <div className='container'>
//             <br></br>
//             <div className='row'>
//                 <div className='card col-md-6 offset-md-3 offset-md-3'>
//                     <h2 className='text-centre'>Add Student</h2>
//                     <div className='card-body'>
//                         <form>
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>First Name:</label>
//                                 <input
//                                     type='text'
//                                     placeholder='enter student first Name'
//                                     name='firstName'
//                                     value={firstName}
//                                     className='form-control'
//                                     onChange={handleFirstName}
//                                 ></input>
//                             </div>
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>Last Name:</label>
//                                 <input
//                                     type='text'
//                                     placeholder='enter student last Name'
//                                     name='lastName'
//                                     value={lastName}
//                                     className='form-control'
//                                     onChange={handleLastName}
//                                 ></input>
//                             </div>
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>E-mail:</label>
//                                 <input
//                                     type='text'
//                                     placeholder='enter student email'
//                                     name='email'
//                                     value={email}
//                                     className='form-control'
//                                     onChange={handleEmail}
//                                 ></input>
//                             </div>
//                             <div className='form-group mb-2'>
//                                 <label className='form-label'>Course ID:</label>
//                                 <input
//                                     type='text'
//                                     placeholder='enter course ID'
//                                     name='courseId'
//                                     value={courseId}
//                                     className='form-control'
//                                     onChange={handleCourseId}
//                                 ></input>
//                             </div>
//                             <button className='btn btn-success' onClick={saveStudent}>Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EmployeeComponent;


// StudentComponent.js - Add new student with courseId
import React, { useEffect, useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [courseCode, setCourseCode] = useState('')
    const navigator = useNavigate();

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

    function saveEmployee(e) {
        e.preventDefault();
        const employee = { firstName, lastName, email, courseCode }
        console.log(employee)
        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }

    return (
        <div className='container'>
            <br></br>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-centre'>Add Student</h2>
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
                            <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeComponent;