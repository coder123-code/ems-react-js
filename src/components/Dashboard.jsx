import React, { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';
import { listCourses } from '../services/CourseService';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    listEmployees().then(res => {
      console.log("Students:", res.data);
      setStudents(res.data);
    }).catch(err => console.error(err));

    listCourses().then(res => {
      console.log("Courses:", res.data);
      setCourses(res.data);
    }).catch(err => console.error(err));
  };

  // 🧮 Only students with valid courseCode
  const validStudents = students.filter(s => s.courseCode !== null);

  // 🧁 Match students to courses
  const studentsPerCourse = courses.map(course => {
    const count = validStudents.filter(s => s.courseCode === course.courseCode).length;
    return {
      name: course.courseName || `Course ${course.id}`,  // For charts
      students: count
    };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#4D8076'];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📊 Admin Dashboard</h2>

      {/* Cards */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">👨‍🎓 Total Students</h5>
              <h2 className="card-text">{students.length}</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">📚 Total Courses</h5>
              <h2 className="card-text">{courses.length}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="row">
        {/* Bar Chart */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">📊 Students Per Course</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={studentsPerCourse}>
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center">🧁 Course Distribution</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={studentsPerCourse}
                    dataKey="students"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                  >
                    {studentsPerCourse.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

