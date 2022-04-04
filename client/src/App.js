//import { BrowserRouter as Switch, Route } from "react-router-dom";
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import './App.css';

import Intro from './components/Intro';
import Header from './components/common/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
//import MyAccount from "./components/MyAccount";
import Contact from './components/Contact';
import Project from './components/Project';

//import Create from './components/create';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      < Header />
      
     <Routes>
      < Route exact path="/login" component={Login} />
      {/* < Route exact path="/dashboard" component={Dashboard} /> */}
      < Route exact path="/user" component={Dashboard} />
      < Route exact path="/project" component={Project} />
      < Route exact path="/contact" component={Contact} />
      
      {/* < Route exact path="/create" component={Create} /> */}

      < Route exact path="/" component={Intro} />

      
      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;