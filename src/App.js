import Home from './componets/home/home';
import './App.scss';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom';



export default function App() {
   
  
  return (
          <BrowserRouter>
              <Switch>
                <Route path= "/" exact component ={Home} />
                <Route path= "/upload" component ={()=>{<div>Hi</div>}} />
                <Route path= "/video/:videoId" component={Home} />
              </Switch>
          </BrowserRouter>
  
  );
}

