import "../currentVideoPlayer/currentVideoPlayer.scss"




export default function Video({currentVideo}){

    return (
        <div className="hero" >
            <video className="hero__player" controls poster={currentVideo.image}>
                </video>
        </div>
    )
}
