import "../currentVideoInfo/currentVideoInfo.scss";
import likes from "../../assets/Icons/likes.svg";
import views from "../../assets/Icons/views.svg";

export default function Video({ currentVideo }) {
  return (
    <div className="videoInfo">
      <section className="videoInfo__container">
        <h2 className="videoInfo__title">{currentVideo.title}</h2>
      </section>

      <section className="videoInfo__icons">
        <div className="videoInfo__icons--channel-date">
          <h4 className="channel"> {currentVideo.channel}</h4>
          <p className="date"> {new Date(currentVideo.timestamp).toLocaleDateString()}</p>
        </div>

        <div className="videoInfo__icons--views-likes">
          <div className="views">
            <img className="views__icon" src={views} alt="views" />
            <p className="views__number">{currentVideo.views}</p>
          </div>
          <div className="likes">
            <img className="likes__icon" src={likes} alt="likes" />
            <p className="likes__number">{currentVideo.likes}</p>
          </div>
        </div>
      </section>

      <section className="videoInfo__description">
        {currentVideo.description}
      </section>
    </div>
  );
}
