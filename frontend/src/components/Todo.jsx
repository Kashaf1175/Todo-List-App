import { useState, useRef, useEffect } from 'react';
import { PlusCircle, X, Edit, Trash, Check, CheckCircle } from 'lucide-react';

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [showTitleInput, setShowTitleInput] = useState(false);
  const [showBodyInput, setShowBodyInput] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: '', body: '' });
  const [editingTodo, setEditingTodo] = useState(null);
  const titleInputRef = useRef(null);
  const bodyInputRef = useRef(null);

  // Focus input field when it becomes visible
  useEffect(() => {
    if (showTitleInput && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [showTitleInput]);

  useEffect(() => {
    if (showBodyInput && bodyInputRef.current) {
      bodyInputRef.current.focus();
    }
  }, [showBodyInput]);

  const handleAddTodo = () => {
    if (newTodo.title.trim() === '') return;
    
    const todoToAdd = {
      id: Date.now(),
      title: newTodo.title,
      body: newTodo.body,
      completed: false
    };
    
    setTodos([todoToAdd, ...todos]);
    setNewTodo({ title: '', body: '' });
    setShowTitleInput(false);
    setShowBodyInput(false);
  };

  const handleUpdateTodo = () => {
    if (!editingTodo || editingTodo.title.trim() === '') return;
    
    setTodos(todos.map(todo => 
      todo.id === editingTodo.id ? editingTodo : todo
    ));
    setEditingTodo(null);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">My Todo List</h1>
        
        {/* Add new todo form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          {/* Title input - always shown as clickable element */}
          <div className="mb-4">
            {showTitleInput ? (
              <div className="relative">
                <input
                  ref={titleInputRef}
                  type="text"
                  placeholder="Task title"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={newTodo.title}
                  onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}
                  onBlur={() => !newTodo.title && setShowTitleInput(false)}
                />
                <button 
                  className="absolute right-2 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowTitleInput(false)}
                >
                  <X size={20} />
                </button>
              </div>
            ) : (
              <div 
                className="p-3 border border-dashed border-gray-300 rounded-lg cursor-text text-gray-500 hover:border-blue-300 hover:text-blue-600 transition-colors"
                onClick={() => setShowTitleInput(true)}
              >
                Click to add a new task
              </div>
            )}
          </div>
          
          {/* Body input - only shown after title is clicked */}
          {(showTitleInput || showBodyInput) && (
            <div>
              <textarea
                ref={bodyInputRef}
                placeholder="Task details (optional)"
                className="w-full p-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-20"
                value={newTodo.body}
                onChange={(e) => setNewTodo({...newTodo, body: e.target.value})}
              ></textarea>
              
              <button
                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium w-full sm:w-auto"
                onClick={handleAddTodo}
                disabled={!newTodo.title.trim()}
              >
                <PlusCircle size={18} />
                Add Task
              </button>
            </div>
          )}
        </div>
        
        {/* Todo list */}
        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <p className="text-gray-500">No tasks yet. Add your first task above!</p>
            </div>
          ) : (
            todos.map(todo => (
              <div 
                key={todo.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
                  todo.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
                }`}
              >
                {editingTodo && editingTodo.id === todo.id ? (
                  <div className="p-4">
                    <input
                      type="text"
                      className="w-full p-2 mb-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                      value={editingTodo.title}
                      onChange={(e) => setEditingTodo({...editingTodo, title: e.target.value})}
                    />
                    <textarea
                      className="w-full p-2 mb-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-20"
                      value={editingTodo.body}
                      onChange={(e) => setEditingTodo({...editingTodo, body: e.target.value})}
                    ></textarea>
                    <div className="flex justify-end gap-2">
                      <button 
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                        onClick={() => setEditingTodo(null)}
                      >
                        Cancel
                      </button>
                      <button 
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                        onClick={handleUpdateTodo}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className={`p-4 ${todo.completed ? 'opacity-60' : ''}`}>
                      <div className="flex items-start justify-between">
                        <h3 className={`text-lg font-semibold mb-2 ${todo.completed ? 'line-through text-gray-500' : 'text-blue-800'}`}>
                          {todo.title}
                        </h3>
                        {todo.completed && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                      {todo.body && (
                        <p className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>
                          {todo.body}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex border-t border-gray-100">
                      <button 
                        className={`flex-1 py-2 flex items-center justify-center gap-1 ${
                          todo.completed ? 'text-green-600 hover:bg-green-50' : 'text-gray-500 hover:bg-gray-50'
                        }`}
                        onClick={() => toggleComplete(todo.id)}
                      >
                        {todo.completed ? (
                          <>
                            <CheckCircle size={16} />
                            <span>Completed</span>
                          </>
                        ) : (
                          <>
                            <Check size={16} />
                            <span>Complete</span>
                          </>
                        )}
                      </button>
                      
                      <button 
                        className="flex-1 py-2 flex items-center justify-center gap-1 text-blue-600 hover:bg-blue-50"
                        onClick={() => setEditingTodo({...todo})}
                      >
                        <Edit size={16} />
                        <span>Edit</span>
                      </button>
                      
                      <button 
                        className="flex-1 py-2 flex items-center justify-center gap-1 text-red-600 hover:bg-red-50"
                        onClick={() => handleDeleteTodo(todo.id)}
                      >
                        <Trash size={16} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}