import {useState} from 'react';
import {Counter} from './components/counter/Counter';
import {Show} from './components/show/Show';
import './App.css';

function App() {
  const [text, setText] = useState('')

  const clickSh = () => setText('show was called');

  return (
    <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Counter/>
      <hr/>
      <Show clickSh={clickSh} />
      <hr/>
      <div data-testid="show-text">
        {text}
      </div>
      <hr/>
    </div>
  );
}

export default App;
