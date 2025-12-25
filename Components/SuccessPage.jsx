import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaPencilAlt, FaSignOutAlt,FaBullhorn } from "react-icons/fa";

const SuccessPage = () => {
  const navigate = useNavigate();
   const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };


  return (
    <div
  className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col bg-cover bg-center"
  style={{ backgroundImage: "url('/200.jpg')" }}
>
   

      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-green-900">BragBoard</h1>
        
         <div className="absolute top-0 right-0 flex items-center gap-4 p-3">
              <button
                onClick={() => navigate('/profile')}
                className="flex items-center gap-2 text-green-900 hover:text-blue-900 transition-colors"
              >
                <FaUserCircle size={24} /> Profile
              </button>
        
              <button
                onClick={() => navigate("/profile/edit")}
                className="flex items-center gap-2 text-green-900 hover:text-yellow-700 transition-colors"
              >
                <FaPencilAlt size={21} /> Edit
              </button>
        
              
              <button
                onClick={() => navigate("/create-shoutout")}
                className="flex items-center gap-2 text-green-900 hover:text-orange-600 transition-colors"
              >
                <FaBullhorn size={24} />
                Create ShoutOut
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-green-900 hover:text-red-700 transition-colors"
              >
                <FaSignOutAlt size={20} /> Logout
              </button>
            </div>
      </nav>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full mx-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Login Successful!</h2>
          <p className="text-gray-600 mb-6">Welcome back to BragBoard.</p>
          <button
            onClick={() => navigate('/profile')}
            className="bg-green-900 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition-colors"
          >
            Go to Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
