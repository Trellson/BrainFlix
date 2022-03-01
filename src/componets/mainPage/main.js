import Player from '../Video/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList';
import Header from '../Header/Header.js'


export default function Main({videosJson, currentVideo, handleVideoChange, videoInfo }) { 

let clickedVideo = videosJson.find(video => video.id === currentVideo.id)


    return (
         
        <main className="app__page">
            <header className='header'>
                <Header/>
            </header>

            <div className="video-Player">
                < Player 
                currentVideo={clickedVideo}
                />
            </div>
            <div className='comments__number'>
                {clickedVideo.comments.length} comments
            </div>
            <div className='comments__form'>

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