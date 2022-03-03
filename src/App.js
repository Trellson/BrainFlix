import React from 'react';
import Main from './componets/mainPage/main';
import videosJson from "././assets/Data/video-details.json";
import videoInfo from "./assets/Data/videos.json"
import './App.scss';


 class App extends React.Component {
   
let api_key = "b601a94b-cfe4-4596-b78a-0a0c620eb96e"

state= {currentVideo: videosJson[0],
          allVideos:videosJson,
           videoInfo:videoInfo}

//replaceVideo(newVideo){
  //this.setState({currentVideo: newVideo})

//}

  render(){
  return (
 
    <Main 
    currentVideo = {this.state.currentVideo}
    //handleVideoChange = {this.replaceVideo.bind(this)}
    videoInfo = {videoInfo}
    />
  )};
}

export default App;
