import "../currentVideoPlayer/currentVideoPlayer.scss"
import likes from '../../assets/Icons/likes.svg';
import views from '../../assets/Icons/views.svg';



export default function Video({currentVideo}){

    return (
        <div className="hero" >
            <video className="hero__player" poster={currentVideo.image}>
                </video>
            <section className="hero__container" >
                <h2 className="hero__player--title">{currentVideo.title}</h2>
            </section>

            <section className="hero__player--icons">
            <div className="channel--date">
                <h4 className="channel"> {currentVideo.channel}</h4>
                <p> {new Date(currentVideo.timestamp).toLocaleDateString()}</p>

            </div>

            <div className="views--likes">
                <div className="views"><img src={views} alt="views" /><p>{currentVideo.views}</p></div>
                <div className="likes"><img src={likes} alt="likes" /><p>{currentVideo.likes}</p></div>
            </div>

        </section>
        
        <section className="hero__player--description">
            {currentVideo.description}
        </section>
        
        </div>
        

    )
}
