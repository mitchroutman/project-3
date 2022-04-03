
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Intro from './components/Intro';
import Header from './components/common/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import MyAccount from "./components/MyAccount";
import Contact from './components/Contact';
import Project from './components/Project';

function App() {
  return (
    <div>
  
      < Header />    
      < Dashboard />
      < Intro />
      < Login />   
      < MyAccount /> 
      < Project />
      < Contact />

    </div>
  );
}

export default App;