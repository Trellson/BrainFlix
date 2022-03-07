import Home from './pages/home/home';
import UploadPage from './componets/upload/UploadPage';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



 function App() {
   
  
  return (
          <BrowserRouter>
              <Switch>
                <Route path= "/" exact component={Home} />
                <Route path= "/upload" component={UploadPage} />
                <Route path= "/video/:videoId" component={Home} />
              </Switch>
          </BrowserRouter>
  
  );
}

export default App;