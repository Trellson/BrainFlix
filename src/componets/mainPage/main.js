import Player from '../Video/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList'


export default function Main({videosJson, currentVideo }) { // { videosJson: 'something' }

    return (
        <main className="app__page">


            

            <div className="video-Player">
                < Player 
                currentVideo={videosJson[0]}
                />
            </div>

            <div className='video__list'>
                <VideoList 
                videosJson={videosJson}
                currentVideo={currentVideo}
                />
            </div>

            <div className='comments-list'>
                <CommentList
                commentList={currentVideo.comments}
                />
            </div>

        </main>
    )
}