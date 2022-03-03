import React from 'react';
import Main from './componets/mainPage/main';
import videosJson from "././assets/Data/video-details.json";
import videoInfo from "./assets/Data/videos.json"
import './App.scss';
import axios from 'axios';


 class App extends React.Component {
   
 api_key = "b601a94b-cfe4-4596-b78a-0a0c620eb96e"
 axiosURL = "https://project-2-api.herokuapp.com"
state= {currentVideo: videosJson[0],
          allVideos:[],
           videoInfo:videoInfo}

         

        componentDidMount(){
        axios.get(this.axiosURL+"/videos?api_key="+this.api_key).then((response) => {
          this.setState({
            allVideos: response.data
          })
        })
      }
        
//}

  render(){
  return (
 
    <Main 
    allVideos = {this.state.allVideos}
    currentVideo = {this.state.currentVideo}
    videoInfo = {videoInfo}
    />
  )};
}

export default App;
