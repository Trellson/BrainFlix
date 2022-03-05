import React from "react";
import  "./header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import profile from "../../assets/Images/Mohan-muruge.jpg"
import upload from "../../assets/Icons/upload.svg"
import {Link} from "react-router-dom";
//import glass from "../../assets/Icons/search.svg"

function Header() {
    return (
    <div className="header__container"> 
        
        <Link to= {`/`}>
        <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <div className="header__wrapper">
            <div className="searchbar">
            <form className="searchbar__form">
                <input
                    type="text"
                    className="searchbar__input"
                    placeholder="Search"
                />
            </form>
                <img className="searchbar__photo" src={profile} alt="alt"/>
            </div>
            <div className="header__button--wrapper">
               <button className="header__button">
               <img className="header__button--sticker" src={upload} alt="face"/> UPLOAD
            </button>
            </div>
        </div>
    </div>
    )
}

export default Header