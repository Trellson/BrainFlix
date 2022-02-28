import Player from '../Video/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList'


export default function Main({videosJson, currentVideo, handleVideoChange, videoinfo }) { 

    console.log(videosJson)
    return (
        <main className="app__page">


            

            <div className="video-Player">
                < Player 
                currentVideo={currentVideo}
                />
            </div>
            <div className='comments__number'>
                {currentVideo.comments.length} comments
            </div>

            <div className='comments-list'>
                <CommentList
                commentList={currentVideo.comments}
                />
            </div>

            <div className='video__list'>
                <VideoList 
                videosJson={videosJson}
                currentVideo={currentVideo}
                handleVideoChange={handleVideoChange}
                />
            </div>

        </main>
    )
}