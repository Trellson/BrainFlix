import React from "react";
import header from "./header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import profile from "../../assets/Images/Mohan-muruge.jpg"
import upload from "../../assets/Icons/upload.svg"
import glass from "../../assets/Icons/search.svg"

function Header() {
    return (
    <div> 
            <img src={logo} alt="logo" />
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
            <button className="header__button">
               <img className="header__button--sticker" src={upload} alt="face"/> UPLOAD
            </button>
        </div>
    </div>
    )
}

export default Header