import Header from "./components/Header";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route>
    
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
