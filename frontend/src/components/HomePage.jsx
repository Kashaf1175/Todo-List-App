import { useState } from 'react';
import { CheckCircle, Plus, List, CheckCheck, BellDot } from 'lucide-react';

export default function HomePage() {
  const [showDemo, setShowDemo] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        
        {/* Hero section */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Organize Your Life with <span className="text-blue-600">TodoList</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            A simple and intuitive way to keep track of your tasks, goals, and daily activities.
            Start organizing your day in just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md flex items-center gap-2 transition duration-300 transform hover:scale-105"
              onClick={() => setShowDemo(true)}
            >
              <Plus size={20} />
              <span>Make Todo List</span>
            </button>
            
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg shadow-md flex items-center gap-2 border border-gray-200 transition duration-300">
              <List size={20} />
              <span>View Examples</span>
            </button>
          </div>
        </div>
        
        {/* Features section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <CheckCircle size={30} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Easy Task Management</h3>
            <p className="text-gray-600">Create, track, and complete tasks with just a few clicks. Organize by priority and due dates.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <List size={30} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Custom Categories</h3>
            <p className="text-gray-600">Organize your tasks into different categories or projects to keep everything in order.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <CheckCheck size={30} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Track Progress</h3>
            <p className="text-gray-600">See your productivity at a glance with visual progress indicators and completion statistics.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <BellDot size={30} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Notifications</h3>
            <p className="text-gray-600">Get timely notifications about upcoming tasks and deadlines to stay on track with your goals.</p>
          </div>

          
        </div>
        
        {/* Demo Todo List (conditionally shown) */}
        {showDemo && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto">
            <div className="p-4 bg-blue-600 text-white font-medium flex justify-between items-center">
              <h3 className="text-lg">My Todo List</h3>
              <button 
                className="text-sm hover:underline"
                onClick={() => setShowDemo(false)}
              >
                Close Demo
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex mb-4">
                <input 
                  type="text" 
                  placeholder="Add a new task..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Add
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center p-3 border border-gray-200 rounded-lg group hover:bg-gray-50">
                  <input type="checkbox" className="mr-3 h-5 w-5" />
                  <span className="flex-grow">Complete homepage design</span>
                  <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100">Delete</button>
                </div>
                
                <div className="flex items-center p-3 border border-gray-200 rounded-lg group hover:bg-gray-50">
                  <input type="checkbox" className="mr-3 h-5 w-5" />
                  <span className="flex-grow">Add responsive navbar</span>
                  <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100">Delete</button>
                </div>
                
                <div className="flex items-center p-3 border border-gray-200 rounded-lg group hover:bg-gray-50">
                  <input type="checkbox" className="mr-3 h-5 w-5" checked />
                  <span className="flex-grow line-through text-gray-400">Setup project repository</span>
                  <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Call to action */}
        <div className="text-center mt-16 pt-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to get organized?</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Start managing your tasks effectively today and boost your productivity.
          </p>
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md inline-flex items-center gap-2"
            onClick={() => setShowDemo(true)}
          >
            <Plus size={20} />
            <span>Create Your First Todo List</span>
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CheckCircle className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-xl">TodoList</span>
          </div>
          <p className="text-gray-400">© 2025 TodoList App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}