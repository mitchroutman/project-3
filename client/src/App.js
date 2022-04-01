import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Switch>
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
      </Switch>
    </Router>
  );
}

export default App;
