/*import React ,{ useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom';


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])
    const navigator = useNavigate();//navigator is a varibale. so defining like this

    useEffect(() => {
        listEmployees().then((response) => {//listemployee() function is called.the function is called which is defined in EmployeeService.jsx .now when the fucntion gets called he api will have the data.now it gets loaded into data and response.data wll contain {name:deepika,email:deepika@gmail.com}
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
    function addNewEmployee() {
        navigator('/add-employee');
      }


    return (
        <div className='container'>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent
*/
// import React, { useEffect, useState } from 'react';
// import { listEmployees, deleteEmployee } from '../services/EmployeeService';
// import { useNavigate } from 'react-router-dom';

// const ListEmployeeComponent = () => {
//     const [employees, setEmployees] = useState([]);
//     const navigator = useNavigate();

//     useEffect(() => {
//         getAllEmployees();
//     }, []);//runs immediately after the fucntion is called 
    

//     function getAllEmployees() {
//         listEmployees().then((response) => {
//             setEmployees(response.data);
//         }).catch(error => {
//             console.error(error);
//         });
//     }

//     function addNewEmployee() {
//         navigator('/add-employee');
//     }

//     function updateEmployee(id) {
//         navigator(`/edit-employee/${id}`);
//     }

//     function removeEmployee(id) {
//         console.log(id);
        
//         if (window.confirm('Are you sure you want to delete this employee?')) {
//             deleteEmployee(id).then((response) => {
//                 getAllEmployees(); // Refresh the list
//                 alert('Employee deleted successfully!');
//             }).catch(error => {
//                 console.error(error);
//                 alert('Error deleting employee!');
//             });
//         }
//     }

//     return (
//         <div className='container'>
//             <h2 className='text-center'>List of Students</h2>
//             <button className='btn btn-primary mb-2' onClick={addNewEmployee}>
//                 Add Students
//             </button>
            
//             <table className='table table-striped table-bordered'>
//                 <thead className="table-secondary">
//                     <tr>
//                         <th>Student Id</th>
//                         <th>Student First Name</th>
//                         <th>Student Last Name</th>
//                         <th>Student Email Id</th>
//                         <th>Enrolled Course Code</th>
//                         <th>Actions</th> {/* ADD THIS COLUMN */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         employees.map(employee =>
//                             <tr key={employee.id}>
//                                 <td>{employee.id}</td>
//                                 <td>{employee.firstName}</td>
//                                 <td>{employee.lastName}</td>
                               
//                                 <td>{employee.email}</td>
//                                 <td>{employee.courseCode}</td> {/*should match entity names in springboot.same case s */}
//                                 <td>
//                                     {/* ADD THESE BUTTONS */}
//                                     <button 
//                                         className='btn btn-info me-2' 
//                                         onClick={() => updateEmployee(employee.id)}
//                                     >
//                                         Update
//                                     </button>
//                                     <button 
//                                         className='btn btn-danger' 
//                                         onClick={() => removeEmployee(employee.id)}
//                                     >
//                                         Delete
//                                     </button>
//                                 </td>
//                             </tr>
//                         )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListEmployeeComponent;
import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    function addNewEmployee() {
        navigator('/add-employee');
    }

    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`);
    }

    function removeEmployee(id) {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            deleteEmployee(id).then(() => {
                getAllEmployees();
                alert('Employee deleted successfully!');
            }).catch(error => {
                console.error(error);
                alert('Error deleting employee!');
            });
        }
    }

    const filteredEmployees = employees.filter((employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <h2 className='text-center'>List of Students</h2>

            {/* 🔍 Search Box */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search employees..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-6 text-end">
                    <button className='btn btn-primary' onClick={addNewEmployee}>
                        Add Student
                    </button>
                </div>
            </div>

            <table className='table table-striped table-bordered'>
                <thead className="table-secondary">
                    <tr>
                        <th>Student Id</th>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Email Id</th>
                        <th>Enrolled Course Code</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.courseCode}</td>
                                <td>
                                    <button
                                        className='btn btn-info me-2'
                                        onClick={() => updateEmployee(employee.id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => removeEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
