import Player from '../currentVideoPlayer/currentVideoPlayer.js';
import VideoList from '../videoList/videoList';
import CommentList from '../comments/commentsList';
import Header from '../header/header.js'
import React from 'react';
import axios from 'axios';

const api_key = "b601a94b-cfe4-4596-b78a-0a0c620eb96e";
const axiosURL = "https://project-2-api.herokuapp.com";



class Home extends React.Component { 

    state= {currentVideo: {},
    allVideos:[],
     videoInfo:{},
    currentVideoComments:[]}


     currentVideoDetails = (id) => {
        
        axios.get(axiosURL+"/videos/"+id+"?api_key="+api_key).then((response) => {
            
            const videoData = response.data;
          this.setState({
            currentVideo: videoData,
            currentVideoComments: videoData.comments
  
          })
          .catch(err => console.log(err))
        })
      }

  componentDidMount(){
  axios.get(`https://project-2-api.herokuapp.com/videos?api_key=b601a94b-cfe4-4596-b78a-0a0c620eb96e`).then((response) => { 
    this.setState({
      allVideos: response.data   
    })
    this.currentVideoDetails(response.data[0].id)
  })
  .catch(err => console.log(err))
}

componentDidUpdate(prevProps, prevState){
  
  const videoId = this.props.match.params.videoId || this.state.allVideos[0].id;
  
  if (prevState.currentVideo && prevState.currentVideo.id !== videoId){
    this.currentVideoDetails(videoId)
  }
}
    


render(){
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
                allVideos={this.state.allVideos}
                currentVideo={this.state.currentVideo}
                />
            </div>

        </main>
    )
}
}

export default Home;