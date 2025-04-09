import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [todo, setTodo] = useState({ title: '', body: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  
  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      // First check if location state has auth info (passed from Todo component)
      if (location.state && location.state.isLoggedIn) {
        setIsLoggedIn(true);
        setUserEmail(location.state.email || '');
        return true;
      }
      
      // Otherwise check localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
        return true;
      }
      
      return false;
    };
    
    const isAuth = checkAuth();
    
    if (!isAuth) {
      toast.error("Please login to update tasks");
      navigate('/');
      return;
    }
    
    // Initialize task data
    if (location.state && location.state.todo) {
      setTodo({
        title: location.state.todo.title || '',
        body: location.state.todo.body || ''
      });
    } else {
      // If no state was passed, redirect back to main page
      toast.error("Task information not found");
      navigate('/');
    }
  }, [id, navigate, location]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!todo.title.trim()) {
      toast.error("Title is required");
      return;
    }
    
    if (!isLoggedIn) {
      toast.error("You must be logged in to update tasks");
      navigate('/login');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Use email from state or get from localStorage
      const email = userEmail || JSON.parse(localStorage.getItem('user'))?.email;
      
      if (!email) {
        throw new Error("User email not found");
      }
      
      const response = await axios.post(`/api/list/updateTask/${id}`, {
        title: todo.title,
        body: todo.body,
        email: email
      });
      
      if (response.status === 200) {
        toast.success("Task updated successfully");
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error("Failed to update task: " + (error.response?.data?.message || error.message));
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-lg mx-auto">
        <ToastContainer />
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-blue-800 mb-6">Update Task</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Task Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Task title"
                value={todo.title}
                onChange={(e) => setTodo({...todo, title: e.target.value})}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
                Task Details
              </label>
              <textarea
                id="body"
                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-32"
                placeholder="Task details (optional)"
                value={todo.body}
                onChange={(e) => setTodo({...todo, body: e.target.value})}
              ></textarea>
            </div>
            
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                onClick={() => navigate('/')}
                disabled={isLoading}
              >
                Cancel
              </button>
              
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                disabled={isLoading || !todo.title.trim()}
              >
                {isLoading ? 'Updating...' : 'Update Task'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;