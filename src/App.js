import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result"
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
          <Route path="./components/Result">
            <Result/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
