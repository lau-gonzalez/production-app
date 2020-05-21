import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { useUser } from 'reactfire';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import CreateFh1 from "./components/creations/CreateFh1";
import CreateFh2 from "./components/creations/CreateFh2";
import CreateFsch from "./components/creations/CreateFsch";
import CreateFscfi1 from "./components/creations/CreateFscfi1";
import CreateFscfi2 from "./components/creations/CreateFscfi2";
import CreateFecfi1 from "./components/creations/CreateFecfi1";
import CreateFecfi2 from "./components/creations/CreateFecfi2";
import Auth from './components/Auth';
import Navigation from './components/Navigation';


function App() {

  let user = useUser();

  return (      
      <Router>
          <Route path="/" component={()=><Auth/>} />        
          {!user ? user= "" : <Navigation /> }                                                  
          <Route path="/fscfi1" component={()=><CreateFscfi1 usuario={user.email} />} />
          <Route path="/fscfi2" component={()=><CreateFscfi2 usuario={user.email} />} />
          <Route path="/fh2" component={()=><CreateFh2 usuario={user.email} />} />
          <Route path="/fh1" component={()=><CreateFh1 usuario={user.email} />} />
          <Route path="/fecfi1" component={()=><CreateFecfi1 usuario={user.email} />} />
          <Route path="/fecfi2" component={()=><CreateFecfi2 usuario={user.email} />} />
          <Route path="/fsch" component={()=><CreateFsch usuario={user.email} />} />          
        </Router> 
  )
}

export default App;
