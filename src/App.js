import React from 'react';
import Main from './componets/mainPage/main';
import videosJson from "././assets/Data/video-details.json";
import './App.scss';


 class App extends React.Component {

state= {videosJson : videosJson, currentVideo: videosJson[0]}


  render(){
  return (
    <Main videosJson={this.state.videosJson}
    currentVideo = {this.state.currentVideo}
      

    />
  )};
}

export default App;
