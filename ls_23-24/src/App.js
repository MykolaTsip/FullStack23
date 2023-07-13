import React, {createContext, useState} from 'react';
import './App.css';

import { RefComp } from './Refs';
import { Frg } from './Fragments';
import { Portal } from './Portal';

import { storeCounter } from './store';

export const MyCont = createContext()

function App() {
  const [theme, setY] = useState({
    isYellow: 'bg-yellow'
  });

  const updateC = (color) => {
    setY(color)
  }

  console.log(storeCounter(), 'store')

  const {setP, setM, count} = storeCounter();

  const addOne = () => setP();
  const minOne = () => setM();

  return (
    <MyCont.Provider value={{...theme, updateC}}>
            <div className={theme.isYellow}>
              <RefComp>
              <Frg></Frg>
              </RefComp>
              <Frg />
              <Portal/>
            </div>
        <hr/>
        <button onClick={addOne}>add</button>
        <div>
          {count}
        </div>
        <button onClick={minOne}>minus</button>
    </MyCont.Provider>
  );
}

export default App;
