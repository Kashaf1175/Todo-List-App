import { useState } from 'react';
import { Edit, Trash, Check, CheckCircle } from 'lucide-react';

const TodoCard = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [editingTodo, setEditingTodo] = useState(null);

  const handleUpdateTodo = () => {
    if (!editingTodo || editingTodo.title.trim() === '') return;
    
    onEdit(editingTodo);
    setEditingTodo(null);
  };

  const startEditing = () => {
    setEditingTodo({...todo});
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all ${
        todo.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-blue-500'
      }`}
    >
      {editingTodo ? (
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
              onClick={() => onToggleComplete(todo.id)}
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
              onClick={startEditing}
            >
              <Edit size={16} />
              <span>Edit</span>
            </button>
            
            <button 
              className="flex-1 py-2 flex items-center justify-center gap-1 text-red-600 hover:bg-red-50"
              onClick={() => onDelete(todo.id)}
            >
              <Trash size={16} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoCard;