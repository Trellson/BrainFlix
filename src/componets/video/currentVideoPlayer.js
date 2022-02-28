import "../Video/video.scss"



export default function Video({currentVideo}){


    return (
        <div className="top-video">
        <video className="hero-player" poster={currentVideo.image}>
        </video>
        <h2 className="player__title">{currentVideo.title}</h2>
        <section className="player__description">
            {currentVideo.description}
        </section>
        <section className="player__icons">
            <div>
                <p>likes {currentVideo.likes}</p>

            </div>

        </section>
        </div>
        

    )
}
