import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div>
      <h1>Welcome To Agile Lake</h1>
      <Router>
        <Routes>
            <Route exact path="/">
               <Login />
            </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="*">
            <div>
              <h1>Not found</h1>
            </div>
          </Route>

        </Routes>
      </Router>
    </div>  
  );
}

export default App;
