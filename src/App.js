import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header/>
    //     <Switch>
    //       <Route exact path="/">
    //         <Main/>
    //       </Route>
    //       <Route path="./components/Result">
    //         <Result/>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element = {Main} exact/>
        <Route path = "/result" element = {Result}/>
      </Routes>
    </div>
  
  );
}

export default App;
