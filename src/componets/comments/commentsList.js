import Comments from '../Video/currentVideoPlayer'
import './comments.scss'


export default function VideoList({currentVideo, videosJson }) {
        return(
            <section className="comments-list__display">
                <ul className="">
                    {videosJson
                    .filter(Comments => video.id !== currentVideo.id)
                    .map(video => {
                        return (
                            <></>
                        )
                })}


                
                </ul>
            </section>
        )
}