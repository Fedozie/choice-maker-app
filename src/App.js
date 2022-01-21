import React, {useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result";

function App() {
  const [display, setDisplay] = useState(true);
  const startHandler = () => {
    setDisplay(false)
  }
  const endHandlder = () => {
    setDisplay(true);
  }

  return (
    <div className="App">
      <Header/>
      {display && <Main/>}
      {!display && <Result onReturn = {endHandlder}/>}
    </div>
  );
}

export default App;
