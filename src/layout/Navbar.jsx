import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';
import ShoppingCard from '../page/ShoppingCard';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  return (
    <header className="text-gray-600 body-font font-semibold text-2xl shadow-md bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo Section */}
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>

        {/* Navigation Links */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-lg justify-center space-x-6">
          <Link to="/" className="hover:text-gray-900">
            Home
          </Link>

          {!userInfo ? (
            <>
              <Link to="/login" className="hover:text-gray-900">
                Login
              </Link>
              <Link to="/register" className="hover:text-gray-900">
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={logoutHandler}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Logout
            </button>
          )}
        </nav>

        {/* Shopping Cart Button */}
        {userInfo && (
          <button
            onClick={() => setOpen(true)}
            className="relative bg-gray-100 border-0 py-2 px-4 rounded-md hover:bg-gray-200 flex items-center"
            aria-label="Open Shopping Cart"
          >
            <i className="fas fa-shopping-cart text-xl"></i>
          </button>
        )}

        {/* Shopping Card Component */}
        <ShoppingCard open={open} setOpen={setOpen} />
      </div>
    </header>
  );
};

export default Navbar;
