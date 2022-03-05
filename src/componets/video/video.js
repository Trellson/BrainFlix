import {Link} from "react-router-dom";
import "./videoListItems.scss";


export default function ({video}){



    return(
        <Link className="video-list__item"
            to={`/video/${video.id}`} > 

            <div className="video-list__item--thumbnail">
                <img src={video.image} alt={video.title}></img>
            </div> 

            <div className="video-list__item--content">
                <h3 className="video-list__item-title">{video.title}</h3>
                <p>{video.channel}</p>
            </div>
        </Link>
        
    
    );

        
}