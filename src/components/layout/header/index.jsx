import React, { useState } from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaSearch, FaVideo, FaTh, FaBell, FaUserCircle } from "react-icons/fa";
import SearchModel from "./searchModel";

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__left">
          <RxHamburgerMenu className="header__left__icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&s"
            alt=""
            width={115}
          />
        </div>
        <div className="header__center">
          <form className="header__form">
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>
              <CiSearch />
            </button>
            {search.trim() ? <SearchModel search={search} /> : <></>} 
          </form>
        </div>
        <div className="header__right">
          <FaVideo />
          <FaBell />
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
};

export default Header;
