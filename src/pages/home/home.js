import Player from '../../componets/currentVideoPlayer/currentVideoPlayer.js';
import VideoList from '../../componets/videoList/videoList';
import CommentList from '../../componets/commentsList/commentsList';
import Header from '../../componets/header/header.js'
import CommentsForm from "../../componets/commentsForm/commentsForm.js";
import '../../componets/commentsList/commentsList.scss';
import React from 'react';
import axios from 'axios';


const axiosURL = "http://localhost:5000";



class Home extends React.Component { 

    state= {currentVideo: {},
    allVideos:[],
     videoInfo:{},
    currentVideoComments:[]}


     currentVideoDetails = (id) => {
        
        axios.get(axiosURL+"/videos/"+id).then((response) => {
            
            const videoData = response.data;
          this.setState({
            currentVideo: videoData,
            currentVideoComments: videoData.comments
  
          })
          .catch(err => console.log(err))
        })
      }

  componentDidMount(){
  axios.get(`${axiosURL}/videos`).then((response) => { 
    console.log(response.data)
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

            <section className='comments__container'>
            <div className='comments__number'>
                {this.state.currentVideoComments.length} comments
            </div>
            <div className='comments__form'>
                  <CommentsForm />
            </div>

            <div className='comments__list'>
                <CommentList
                commentList={this.state.currentVideoComments}
                />
            </div>
            </section>
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