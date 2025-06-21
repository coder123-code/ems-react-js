
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';


// const MainLayout = ({ children }) => (
//   <div className="d-flex">
//     {/* Sidebar */}
//     <div className="bg-dark text-white p-3 vh-100" style={{ width: '220px' }}>
//       <h4>Student MS</h4>
//       <nav className="nav flex-column">
//       <NavLink
//   className={({ isActive }) =>
//     'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
//   }
//   to="/dashboard"
// >
//   🏠 Dashboard
// </NavLink>

// <NavLink
//   className={({ isActive }) =>
//     'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
//   }
//   to="/employees"
// >
//   👨‍🎓 Students
// </NavLink>

// <NavLink
//   className={({ isActive }) =>
//     'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
//   }
//   to="/courses"
// >
//   📚 Courses
// </NavLink>

// <NavLink
//   className={({ isActive }) =>
//     'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
//   }
//   to="/marks"
// >
//   📈 Marks
// </NavLink>

//       </nav>
//     </div>

//     {/* Main Content */}
//     {/* <div className="flex-grow-1">
//       <header className="bg-dark text-white">Welcome, Admin</header>
//       <main className="p-4">{children}</main>
    
//     </div> */}
//     <div className="flex-grow-1">
//   <header className="p-3 mb-2 bg-secondary text-white">
//     <h4 className="mb-0">Welcome, Admin</h4>
//   </header>
//   <main className="p-4">{children}</main>
// </div>

//   </div>
// );

// export default MainLayout;





import React from 'react';
import { NavLink } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div style={{ minHeight: '100vh' }} className="d-flex">
    {/* Sidebar */}
    <div className="bg-dark text-white p-3" style={{ width: '220px', minHeight: '100vh' }}>
      <h4>Student MS</h4>
      <nav className="nav flex-column">
        <NavLink
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
          }
          to="/dashboard"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
          }
          to="/employees"
        >
          👨‍🎓 Students
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
          }
          to="/courses"
        >
          📚 Courses
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            'nav-link text-white' + (isActive ? ' bg-secondary fw-bold rounded' : '')
          }
          to="/marks"
        >
          📈 Marks
        </NavLink>
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-grow-1 d-flex flex-column">
      <header className="p-3 bg-secondary text-white">
        <h4 className="mb-0">Welcome, Admin</h4>
      </header>
      <main className="p-4 flex-grow-1">{children}</main>
    </div>
  </div>
);

export default MainLayout;
