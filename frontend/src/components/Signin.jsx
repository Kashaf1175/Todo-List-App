// LoginForm.jsx
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const Signin = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  // const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    // const newErrors = {};
    // if (!formData.email) newErrors.email = 'Email is required';
    // if (!formData.password) newErrors.password = 'Password is required';
    
  //   if (Object.keys(newErrors).length === 0) {
  //     // Submit form
  //     console.log('Login data:', formData);
  //     // Here you would typically make an API call to authenticate the user
  //     alert('Login successful!');
  //   } else {
  //     setErrors(newErrors);
  //   }
  // };
   console.log("Form data being sent:", formData);
  
 try {
  const response = await axios.post('http://localhost:1000/api/v1/login', formData)
  .then((response) => {
    sessionStorage.setItem("id", response.data.others._id);
    dispatch(authActions.login());  
    history("/todo");
    console.log("Response received:", response);
  });
 } catch (error) {
  
  toast.error(error.response?.data?.message || "Failed to create account");
 }
        
      
    };
  
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Log in to your Todo List</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
            `}
            placeholder="your@email.com"
          />
          {/* {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>} */}
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
            `}
            placeholder="••••••••"
          />
          {/* {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>} */}
        </div>
        
        <div className="flex items-center mb-6">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
        >
          Log in
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;