import React from "react";
import "./header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import profile from "../../assets/Images/Mohan-muruge.jpg";
import upload from "../../assets/Icons/upload.svg";
import { Link } from "react-router-dom";
//import glass from "../../assets/Icons/search.svg"

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
          <div className="header__container-left">
        <Link to={`/`}>
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
          </div>
        <div className="header__container-right">
          <form className="header__form">
            <input
              type="text"
              className="header__input"
              placeholder="Search"
            />
          </form>
          <img className="header__avatar header__avatar--mobile" src={profile} alt="user" />
          <Link to={`/upload`}>
            <button className="header__button">
              <img
                className="header__button--sticker"
                src={upload}
                alt="upload"
              />{" "}
              UPLOAD
            </button>
          </Link>
          <img className="header__avatar header__avatar--tablet" src={profile} alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
