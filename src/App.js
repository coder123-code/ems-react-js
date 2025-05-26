
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent />} />
        
        {/* http://localhost:3000/employees */}
        <Route path='employees' element={<ListEmployeeComponent />} />
        <Route path='/add-employee' element={<EmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
