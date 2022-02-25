import React from "react";
import header from "./header.scss"
import logo from "../../assets/Logo/BrainFlix-logo.svg"
import profile from "../../assets/Images/Mohan-muruge.jpg"

function Header() {
    return (
    <div> 
            <img src={logo} />
        <div className="header__wrapper">
            <div className="searchbar">
              <form className="searchbar__form">
                <input 
                    type="text"
                    className="searchbar__input"
                    placeholder="Search"
                />
            </form>

                <img className="searchbar__photo" src={profile}/>

            </div>

            <button className="header__button">UPLOAD
            </button>
        </div>
    </div>
    )
}

export default Header