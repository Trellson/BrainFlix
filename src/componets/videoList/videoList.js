
import Video from "../Video/video"
import './videoList.scss'


export default function VideoList({ currentVideo, videosJson , handleVideoChange   }) {
        
    return(
            <section className="video-list">
                <h4 className="video-list__header">Next Videos</h4>
                <ul className="video-list__list">
                    {videosJson
                    .filter(video => video.id !== currentVideo.id)
                    .map(video => {
                        return (
                            <Video 
                            key={video.id} 
                            handleVideoChange={handleVideoChange}
                            video= {video}
                            />
                    
                        
                        )
                })}


                
                </ul>
            </section>
        )
}