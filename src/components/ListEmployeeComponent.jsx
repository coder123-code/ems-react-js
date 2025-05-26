import React ,{ useEffect, useState } from 'react'
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