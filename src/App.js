import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/leagues/:id">
          <LeagueDetail />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
