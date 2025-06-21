
// import HelloWorld from './HelloWorld';//always add import statements
// import FooterComponent from './components/FooterComponent';
// import HeaderComponent from './components/HeaderComponent';
// import ListEmployeeComponent from './components/ListEmployeeComponent';


// function App() {
//   return (
//     <>
//     <HeaderComponent />
//     <ListEmployeeComponent />
   
    

//     </>
//   )
// }

// export default App
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ListCoursesComponent from './components/ListCoursesComponent';
import CoursesComponent from './components/CoursesComponent';
import UpdateCourseComponent from './components/UpdateCourseComponent';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

import MainLayout from './components/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListMarksComponent from './components/ListMarksComponent';
import AddMarksComponent from './components/AddMarksComponent';
import UpdateMarkComponent from './components/UpdateMarkComponent';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

{/* Login page */}
{/* 
 */}{/* Login route (no sidebar) */}
        <Route path="/" element={<LoginPage />} />

{/* Pages with sidebar */}
<Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
<Route path="/employees" element={<MainLayout><ListEmployeeComponent /></MainLayout>} />
<Route path="/courses" element={<MainLayout><ListCoursesComponent /></MainLayout>} />
<Route path="/marks" element={<MainLayout><ListMarksComponent /></MainLayout>} />

{/* Add/Edit employees (can wrap in MainLayout too if you want sidebar there) */}
{/* navigator calls '/add-employee' and comes here and then then the component 'EmployeeComponent ' is called */}

<Route path="/add-employee" element={<MainLayout><EmployeeComponent /></MainLayout>} />
<Route path="/edit-employee/:id" element={<MainLayout><UpdateEmployeeComponent /></MainLayout>} />
<Route path="/add-course" element={<MainLayout><CoursesComponent /></MainLayout>} />
<Route path="/edit-course/:id" element={<MainLayout><UpdateCourseComponent /></MainLayout>} />



<Route path="/add-mark" element={<MainLayout><AddMarksComponent /></MainLayout>} />
<Route path="/edit-mark/:id" element={<MainLayout><UpdateMarkComponent /></MainLayout>} />


      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
