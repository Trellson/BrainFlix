


export default function ({video, handleVideoChange }){



    return(
        <div className="video-list__item"
            onClick= {() => handleVideoChange(video)} > 

            <div className="video-list__item--thumbnail">
                <img src={video.image} alt={video.title}></img>
            </div> 

            <div className="video-list__item--content">
                <title className="video-list__item-title">{video.title}</title>
                <p>{video.channel}</p>
            </div>

        </div>
    
    );

        
}