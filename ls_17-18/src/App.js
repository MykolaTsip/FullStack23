import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Routes  } from 'react-router-dom'

import { UnForm } from './UncontrolComponent';
import { ControlF } from './ControlValidateForm';
import { Hello } from './Hello';
import { Comp } from './Comp';

function App() {
  return (
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Hello/>}></Route>
          <Route path='/form' Component={ControlF}>
            {/* <UnForm/> */}
            {/* <hr/> */}
          </Route>
          <Route path='/text' Component={Comp} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
