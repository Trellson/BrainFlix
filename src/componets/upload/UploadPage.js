import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg"
import Header from "../header/header"
import UploadIcon from "../../assets/Icons/upload.svg"
import "./upload.scss"

export default function UploadPage(){

  return(


        <>
            <Header />

            <div className="upload__Section-title">
                  <h1> Upload Video</h1>
            </div>

            <div className="upload__thumbnail">
                <h4 className="upload__thumbnail--text">Video Thumbnail</h4>
                <img className="upload__thumbnail--photo" src={uploadThumbnail} alt="face"/>
            </div>

            <div className="upload-container">
                  <form className="upload-container__form">
                    <label className="upload-container__form--title-label">Title Your Video</label>
                    <input className="upload-container__form--title-box" type="text" placeholder="Add a title to your video"/>
                    <label className="upload-container__form--discription-label">Add A Video Description</label>
                    <textarea className="upload-container__form--discrpition-box" type="text" placeholder="Add a description to your video"></textarea>
                    <div className="header__button--wrapper">
                        <button className="header__button">
                            <img className="header__button--sticker" src={UploadIcon} alt="face"/> PUBLISH
                         </button>
                    </div>     
                  </form>
            </div>


        
        
        
        
        
        
        
        </>

    


  
        

  )  
}



