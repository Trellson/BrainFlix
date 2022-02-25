import React from 'react';
import Header from './componets/header/header.js';
import Video from './componets/video/video.js';
import './App.scss';


 class App extends React.Component {
 
  //state = { }


  render(){
  return (
    <div className="App">
      <Header className="App-header"/>
      <Video />
    </div>
  )};
}

export default App;
