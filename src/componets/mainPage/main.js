import Player from '../currentVideoPlayer/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList';
import Header from '../header/header.js'
import React from 'react';
import axios from 'axios';


class Main extends React.Component { 
    api_key = "b601a94b-cfe4-4596-b78a-0a0c620eb96e"
    axiosURL = "https://project-2-api.herokuapp.com"
state = {
    currentVideo: null,
    currentVideoComments: []
}
    componentDidMount(){

      let currentVideo =this.props.allVideos[0];
      axios.get(this.axiosURL+"/videos/"+currentVideo.id+"?api_key="+this.api_key).then((response) => {
          
          const videoData = response.data;
        this.setState({
          currentVideo: videoData,
          currentVideoComments: videoData.comments

        })
      })
    }


render(){
    console.log(this.state.currentVideo)
    
    const {  allVideos } = this.props


    return (
         
        <main className="app__page">
            <header className='header'>
                <Header/>
            </header>

            <div className="video-Player">
                < Player 
                currentVideo={this.state.currentVideo}
                />
            </div>
            <div className='comments__number'>
                {this.state.currentVideoComments.length} comments
            </div>
            <div className='comments__form'>

            </div>

            <div className='comments-list'>
                <CommentList
                commentList={this.state.currentVideoComments}
                />
            </div>

            <div className='video__list'>
                <VideoList 
                allVideos={allVideos}
                currentVideo={this.state.currentVideo}
                handleVideoChange={null}
                />
            </div>

        </main>
    )
}
}

export default Main;