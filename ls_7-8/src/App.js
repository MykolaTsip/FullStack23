import React from 'react';

import { Counter } from './components/Counter';
import { MyComp } from './components/MyComponent';
import { Count as CountClass } from './components/CounterClass';
import './App.css';

const a = [1, 2]
const List = () => {
  return (
    <div>
      Lorem
    </div>
  )
}

function App() {
  // const byClick = ($event) => console.log('22222', $event);
  // const byMouseDown = () => console.log('My mouse down');
  // const byMouseUp = () => console.log('My byMouseUp');
  // const ByCopy = () => {console.log(333333)};
  // const Cut = () => {console.log('cut')};
  // const Move = ($event) => {console.log('move', $event)}





  return (
    <div className="App">
      {/* <List></List> */}
      {/* { React.createElement(List) } */}
      { React.createElement('h1', {styl: 's'}, a) }

      {/* <div onClick={byClick}>
        <button>
          Click me
        </button>
      </div>

      <div onMouseDown={byMouseDown}>
        Mouse Down
      </div>

      <div onMouseUp={byMouseUp}>
        byMouseUp
      </div>

      <div onCopy={ByCopy}>
        aassddfff
      </div>

      <div onCut={Cut}>
        xxxxx
      </div>

      <div onMouseMove={Move}>
          ddddddd
      </div> */}

      <Counter/>
      <MyComp  a='sss' d="333" >
          <strong>
            my small component
          </strong>
      </MyComp>
      <CountClass/>
    </div>
  );
}

export default App;
