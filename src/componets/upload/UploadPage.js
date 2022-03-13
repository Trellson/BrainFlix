import uploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import Header from "../header/header";
import UploadIcon from "../../assets/Icons/upload.svg";
import "./upload.scss";
import axios from "axios";

export default function UploadPage(props) {
  const axiosURL = "http://localhost:5000";

  let handleSubmit = (e) => {
    e.preventDefault();
    alert("Your video has been submitted!");
    axios
      .post(`${axiosURL}/videos`, {
        title: e.target.title.value,
        description: e.target.description.value,
      })
      .catch(err => console.log(err))
    props.history.push("/");

  };

  return (
    <>
      <Header />

      <div className="upload__Section-title">
        <h1> Upload Video</h1>
      </div>

      <div className="upload__thumbnail">
        <h4 className="upload__thumbnail--text">Video Thumbnail</h4>
        <img
          className="upload__thumbnail--photo"
          src={uploadThumbnail}
          alt="face"
        />
      </div>

      <div className="upload-container">
        <form onSubmit={handleSubmit} className="upload-container__form">
          <div className="upload-container__form--container">
            <label className="upload-container__form--title-label">
              Title Your Video
            </label>
            <input
              className="upload-container__form--title-box"
              type="text"
              name="title"
              placeholder="Add a title to your video"
              required
            />
            <label className="upload-container__form--discription-label">
              Add A Video Description
            </label>
            <textarea
              className="upload-container__form--description-box"
              type="text"
              name="description"
              placeholder="Add a description to your video"
              required
            ></textarea>
          </div>
          <div className="header__button--wrapper">
            <button className="header__button">
              <img
                className="header__button--sticker"
                src={UploadIcon}
                alt="face"
              />{" "}
              PUBLISH
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
