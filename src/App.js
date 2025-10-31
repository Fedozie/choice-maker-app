import React, {useState} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Result from "./components/Result";
import { Route, Routes } from 'react-router';
import FormContext from './context/formContext';

function App() {
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });

  return (
    <div className="App">
      <FormContext.Provider value={{formData, setFormData}}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </FormContext.Provider>
    </div>
  );
}

export default App;