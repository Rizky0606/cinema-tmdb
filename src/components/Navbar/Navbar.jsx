import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/">
          <h1 className="text-3xl font-bold">CINEMA</h1>
        </Link>
      </div>
      {/*
      <div>
        <input
          type="text"
          placeholder="Search Movie"
          className="input input-bordered h-9"
        />
        <div className="btn btn-primary ml-2 text-white">
          <FaSearch />
        </div>
      </div>
      */}
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            {location.pathname === "/favorite" ? (
              <Link to="/favorite" className="active">
                <h1 className="text-md">Favorite</h1>
              </Link>
            ) : (
              <Link to="/favorite">
                <h1 className="text-md">Favorite</h1>
              </Link>
            )}
          </li>
          <li>
            {location.pathname === "/watchlist" ? (
              <Link to="/watchlist" className="active">
                <h1 className="text-md">Watchlist</h1>
              </Link>
            ) : (
              <Link to="/watchlist">
                <h1 className="text-md">Watchlist</h1>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
