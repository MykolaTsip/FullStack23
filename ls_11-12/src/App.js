
import React, {useState} from 'react';

import LifeComp from './components/lifeClassComp';
import MyFunk from './components/lifeHookComp';

import './App.css';

function App() {

  const a = 'my-class'

  const [isShow, setShow] = useState(true);

  const [isShowF, setShowF] = useState(true);


  return (
    <div className={a.concat('mb-3', )}> 
    {/* { a + 'mb-3' } => використовується частіше */}

    <button onClick={() => setShow(!isShow)}>
      { isShow ? 'HIDE' : 'SHOW' }
    </button>

    <div>
      {/* {
        isShow && <LifeComp/>
      } */}
    </div>

      <hr/>
      <hr/>
      By func method:
      <br></br>
      <button onClick={() => setShowF(!isShowF)}>
      { isShowF ? 'HIDE' : 'SHOW' }
    </button>

      <div>
      {
        isShowF && <MyFunk/>
      }
      </div>
    </div>
  )
}

export default App;
