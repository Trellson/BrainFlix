import Video from '../Video/currentVideoPlayer'
import './videoList.scss'


export default function VideoList({ currentVideo, videosJson , handleVideoChange   }) {
        return(
            <section className="video-list">
                <h3 className="video-list__header">Next Video</h3>
                <ul className="video-list__list">
                    {videosJson
                    .filter(video => video.id !== currentVideo.id)
                    .map(video => {
                        return (
                            <Video
                            key={video.id}
                            id={video.id}
                            title={video.id}
                            channel={video.id}
                            handlevideoChange={handleVideoChange}
                            />
                        )
                })}


                
                </ul>
            </section>
        )
}