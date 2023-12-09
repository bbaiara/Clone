import React from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { FaBars, FaUser, FaCog, FaHome, FaChartBar, FaShoppingCart, FaTag, FaClock, FaSignOutAlt } from 'react-icons/fa';
import { BsFillTagFill } from "react-icons/bs";
import { PiSealWarningFill } from "react-icons/pi";

const Sidebar = ({ toggleSidebar, isSidebarOpen, openSettings, handleLogout }) => {
  const navigate = useNavigate();

  let location = useLocation();
  React.useEffect(() => {
    if(isSidebarOpen)toggleSidebar()
  
  }, [location]);
  const handleLogoutClick = () => {
    // Perform any additional logout logic here
    handleLogout();

    // Redirect to the sign-in page
    navigate('/sign-in');
  };


  return (
    <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''} text-black h-screen`}>
      <button onClick={toggleSidebar} className="sidebar-toggle p-4 focus:outline-none">
        <FaBars className="" />
      </button>       
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'100%'}}>
        <nav className={`${isSidebarOpen ? 'block' : 'hidden'} navbarhover`}>
          <ul className="space-y-2">
            <li>
              <Link to="/home" className="flex items-center p-4 ">
                <FaHome className="mr-2 " />
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center p-4 ">
                <FaUser className="mr-2 " />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center p-4 " onClick={openSettings}>
                <FaCog className="mr-2 " />
                Settings
              </Link>
            </li>
            <li>
              <Link to="/tags" className="flex items-center p-4 ">
                <BsFillTagFill className="mr-2 " />
                Tags
              </Link>
            </li>
            <li>
              <Link to="/stats" className="flex items-center p-4 ">
                <FaChartBar className="mr-2 " />
                Stats
              </Link>
            </li>
            <li>
              <Link to="/store" className="flex items-center p-4 ">
                <FaShoppingCart className="mr-2 " />
                Store
              </Link>
            </li>
            <li>
              <Link to="/ranks" className="flex items-center p-4 ">
                <FaClock className="mr-2 " />
                Top Goose Pomodorks
              </Link>
            </li>
            <li>
              <Link to="/readme" className="flex items-center p-4 ">
                <PiSealWarningFill className="mr-2 " />
                Read me First
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`logout ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={handleLogoutClick}>
          <button className="flex items-center p-4" onClick={handleLogoutClick}>
            <FaSignOutAlt className="mr-2 " />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
