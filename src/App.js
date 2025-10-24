import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result";
import { Route, Routes } from 'react-router';

function App() {
  // const [display, setDisplay] = useState(true);

  // const startHandler = () => {
  //   setDisplay(false);
  // }
  
  // const endHandlder = () => {
  //   setDisplay(true);
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   startHandler();
  // }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </div>
  );
}

export default App;