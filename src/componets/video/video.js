import "./videoListItems.scss";


export default function ({video, handleVideoChange }){



    return(
        <div className="video-list__item"
            onClick= {() => handleVideoChange(video.id)} > 

            <div className="video-list__item--thumbnail">
                <img src={video.image} alt={video.title}></img>
            </div> 

            <div className="video-list__item--content">
                <h3 className="video-list__item-title">{video.title}</h3>
                <p>{video.channel}</p>
            </div>

        </div>
    
    );

        
}