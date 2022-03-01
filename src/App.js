import React from 'react';
import Main from './componets/mainPage/main';
import videosJson from "././assets/Data/video-details.json";
import videoInfo from "./assets/Data/videos.json"
import './App.scss';


 class App extends React.Component {

state= {currentVideo: videosJson[0]}

replaceVideo(newVideo){
  this.setState({currentVideo: newVideo})
}

  render(){
  return (
 
    <Main videosJson={videosJson}
    currentVideo = {this.state.currentVideo}
    handleVideoChange = {this.replaceVideo.bind(this)}
    videoInfo = {videoInfo}
    />
  )};
}

export default App;
