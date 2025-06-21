// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Loginstyle.css';



// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         navigate('/dashboard'); // ✅ redirect to ListEmployeeComponent
//       } else {
//         alert('Login failed');
//       }
//     } catch (error) {
//       alert('Server error');
//       console.error(error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h1>LOGIN PAGE </h1>
//         <h5>Enter Username:</h5>
        
//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <h5>Enter Password:</h5>
        
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br></br>
//         <br></br>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//  import './Loginstyle.css';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

//     try {
//       const response = await fetch(`http://localhost:8080${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('email', data.email);
//         alert(`${isLogin ? 'Login' : 'Registration'} successful`);
//         navigate('/dashboard'); // ✅ redirect to dashboard
//       } else {
//         setError(data || 'Invalid credentials');
//       }
//     } catch (err) {
//       setError('Server error. Try again later.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="login-container">
//       <form onSubmit={handleSubmit} className="login-form">
//         <h2>{isLogin ? 'Login' : 'Register'}</h2>
//         <h5> Enter E-mail:</h5>
//         <input
//           type="email"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <h5> Enter Password:</h5>
//         <input
//           type="password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <button type="submit" disabled={loading}>
//           {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
//         </button>

//         <button
//           type="button"
//           onClick={() => setIsLogin(!isLogin)}
//           style={{ marginTop: '10px', background: 'none', color: 'blue', border: 'none' }}
//         >
//           {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './Loginstyle.css';
// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
//       const response = await fetch(`http://localhost:8080${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (isLogin) {
//           // ✅ Save token & redirect only on login
//           localStorage.setItem('token', data.token);
//           localStorage.setItem('email', data.email);
//           alert('Login successful!');
//           navigate('/dashboard');
//         } else {
//           // ✅ Registration successful, prompt user to login
//           alert('Registration successful! Please login.');
//           setIsLogin(true);
//         }
//       } else {
//         setError(data.message || 'Something went wrong');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           {isLogin ? 'Login' : 'Register'}
//         </h2>

//         {error && <div className="text-red-600 text-sm mb-4 text-center">{error}</div>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             value={email}
//             required
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             value={password}
//             required
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
//             placeholder="Enter password"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
//         >
//           {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
//         </button>

//         <div className="text-center mt-4">
//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-600 hover:underline text-sm"
//           >
//             {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
//       const response = await fetch(`http://localhost:8080${endpoint}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         if (isLogin) {
//           localStorage.setItem('token', data.token);
//           localStorage.setItem('email', data.email);
//           alert('Login successful!');
//           navigate('/dashboard');
//         } else {
//           alert('Registration successful! Please login.');
//           setIsLogin(true);
//         }
//       } else {
//         setError(data.message || 'Something went wrong');
//       }
//     } catch (err) {
//       setError('Network error. Please try again.');
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
//       <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           {isLogin ? 'Login' : 'Register'}
//         </h1>

//         {error && <div className="text-red-600 text-sm text-center mb-4">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               value={email}
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               value={password}
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <button
//             type="button"
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-600 hover:underline text-sm"
//           >
//             {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
 import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './Loginstyle.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('email', data.email);
          alert('Login successful!');
          navigate('/dashboard');
        } else {
          alert('Registration successful! Please login.');
          setIsLogin(true);
        }
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">{isLogin ? 'Login' : 'Register'}</h1>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Please wait...' : isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="toggle">
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
}
