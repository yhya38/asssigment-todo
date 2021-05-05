import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Task from "./Pages/Task";
import User from "./Pages/User";
import Navbar from "./Components/Navbar";

function App() {
  const { currentUser } = useAuth();
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={SignUp} />
        {currentUser ? (
          <Switch>
            <div>
              <Navbar />
              <Route path="/home" component={Home} />
              <Route path="/tasks" component={Task} />
              <Route path="/user" component={User} />
            </div>
          </Switch>
        ) : (
          <Redirect to="/" />
        )}
      </Router>
    </div>
  );
}

export default App;
