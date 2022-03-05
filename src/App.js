import Home from './componets/home/home';
import Upload from './componets/upload/upload';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



 function App() {
   
  
  return (
          <BrowserRouter>
              <Switch>
                <Route path= "/" exact component ={Home} />
                <Route path= "/upload" component ={Upload} />
                <Route path= "/video/:videoId" component={Home} />
              </Switch>
          </BrowserRouter>
  
  );
}

export default App;