
import Video from "../video/video"
import './videoList.scss'


export default function VideoList({ currentVideo, allVideos    }) {
        
    return(
            <section className="video-list">
                <h4 className="video-list__header">Next Videos</h4>
                <ul className="video-list__list">
                    {allVideos
                    .filter(video => video.id !== currentVideo.id)
                    .map(video => {
                        return (
                            <Video 
                            key={video.id} 
                            video= {video}
                            />
                    
                        
                        )
                })}


                
                </ul>
            </section>
        )
}