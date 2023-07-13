import React from 'react';

import './App.scss';
import { Header } from './common/Header';

import { NavbarData } from './constants';


function App() {
  return (
    <div className='wrapper'>
      <Header nav={NavbarData}/>

      <div className='wrapper2'>
        <div className='wrapper2_head'>
            
        </div>

        <div className='wrapper2_text'>

        </div>
      </div>
    </div>
  );
}

export default App;
