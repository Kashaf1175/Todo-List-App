import { useState } from "react";
import { Link } from "react-router-dom";
import { Book, Home, Info, User, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

export default function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }

  return (
    <nav className="bg-slate-800 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <Book className="h-6 w-6 lg:h-7 lg:w-7 text-blue-400" />
              <span className="font-bold text-xl lg:text-2xl xl:text-3xl">
                TodoList
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links - ALWAYS visible on lg screens and up */}
          <div className="hidden lg:block ml-10 lg:ml-16 xl:ml-20">
            <ul className="flex space-x-8 lg:space-x-12 xl:space-x-16">
              <li>
                <Link
                  to="/"
                  className="flex items-center space-x-1 lg:space-x-2 text-gray-300 hover:text-white text-base lg:text-lg"
                >
                  <Home size={18} className="lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center space-x-1 lg:space-x-2 text-gray-300 hover:text-white text-base lg:text-lg"
                >
                  <Info size={18} className="lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/todo"
                  className="flex items-center space-x-1 lg:space-x-2 text-gray-300 hover:text-white text-base lg:text-lg"
                >
                  <Info size={18} className="lg:h-5 lg:w-5 xl:h-6 xl:w-6" />
                  <span>Todo</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Authentication Links */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {!isLoggedIn && (
              <>
                <Link to="/signin">
                  <button className="px-3 py-2 lg:px-4 lg:py-2 rounded text-gray-300 hover:bg-slate-700 text-base lg:text-lg">
                    Sign In
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 lg:px-6 lg:py-2 rounded text-base lg:text-lg font-medium">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            {isLoggedIn && (
              <>
                <Link to="/logout">
                  <button 
                  onClick={logout}
                  className="px-3 py-2 lg:px-4 lg:py-2 rounded text-gray-300 hover:bg-slate-700 text-base lg:text-lg">
                    Log Out
                  </button>
                </Link>
              </>
            )}

            
          </div>

          {/* Tablet Navigation - Visible only on medium screens */}
          <div className="hidden md:flex lg:hidden items-center justify-end flex-1">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-1 text-gray-300 hover:text-white"
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-1 text-gray-300 hover:text-white"
              >
                <Info size={18} />
                <span>About Us</span>
              </Link>
              <Link
                to="/todo"
                className="flex items-center space-x-1 text-gray-300 hover:text-white"
              >
                <Info size={18} />
                <span>Todo</span>
              </Link>
              <button className="px-3 py-2 rounded text-gray-300 hover:bg-slate-700">
                Sign In
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                Sign Up
              </button>
              
               
            </div>
          </div>

          {/* Mobile menu button - Only visible on small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button p-2 rounded-md hover:bg-slate-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only for small screens */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-slate-700">
          <Link
            to="/"
            className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-600"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-600"
          >
            <Info size={18} />
            <span>About Us</span>
          </Link>
          <Link
            to="/todo"
            className="flex items-center space-x-2 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-slate-600"
          >
            <Info size={18} />
            <span>Todo</span>
          </Link>
          
          <div className="pt-4 pb-2 border-t border-slate-600">
            {!isLoggedIn && <> <Link to="/signin">
              <button className="w-full text-left px-3 py-2 rounded text-white hover:bg-slate-600 mb-1">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full text-left bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded mb-1">
                Sign Up
              </button>
            </Link> </>}

            {isLoggedIn && <> <Link to="/logout">
              <button 
                onClick={logout}
                className="w-full text-left px-3 py-2 rounded text-white hover:bg-slate-600">
                Log Out
              </button>
            </Link> </>}
            
            
          </div>
        </div>
      </div>
    </nav>
  );
}