import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'tailwindcss/tailwind.css';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <div className="max-w-[1640px] mx-auto">
          <Link to="/login" className="bg-white text-blue-700 py-2 px-4 rounded-full">
            My WishCloud
          </Link>
        </div>
      );
    }
  }
  return (
    <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-gradient-to-l from-sky-200 to-blue-700">
  {/* Left-side content */}
  <div className="flex items-center">
    <div>
      <img src="./assets/cloudlogo.png" alt="cloud logo image" style={{ width: '70px' }} />
    </div>
    <div className="text-2xl sm:text-3xl lg:text-4xl px-2">
      <span className="font-bold text-white">WishCloud</span>
    </div>
  </div>

  {/* Right-side content */}
  <div className="flex items-center">
    <Link to="/login" className="bg-white text-blue-700 py-2 px-4 rounded-full">
      My WishCloud
    </Link>
  </div>
</header>

  );

}
{/* <nav>{showNavigation()}</nav> */ }
export default Nav;
