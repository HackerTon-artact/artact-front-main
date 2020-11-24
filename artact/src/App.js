import logo from './logo.svg';
import './App.css';
import Main from '../src/container/main';
import {Login,Register,Exhibition,MainPage} from './component/index';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/exhibition" component={Exhibition} />
          <Route exact path="/MainPage" component={MainPage} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
