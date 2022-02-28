import Player from '../Video/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList'


export default function Main({videosJson, currentVideo, handleVideoChange, videoInfo }) { 

let clickedVideo = videosJson.find(video => video.id === currentVideo.id)


    return (
        <main className="app__page">

            <div className="video-Player">
                < Player 
                currentVideo={clickedVideo}
                />
            </div>
            <div className='comments__number'>
                {clickedVideo.comments.length} comments
            </div>

            <div className='comments-list'>
                <CommentList
                commentList={clickedVideo.comments}
                />
            </div>

            <div className='video__list'>
                <VideoList 
                videosJson={videoInfo}
                currentVideo={currentVideo}
                handleVideoChange={handleVideoChange}
                />
            </div>

        </main>
    )
}