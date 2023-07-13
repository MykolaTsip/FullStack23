import './App.css';

import {Counter} from './Counter';
import {Random} from './Rand';
import {Posts} from './Posts';

function App() {
  return (
    <div>
     <Counter/>
     <hr/>
     <Random/>
     <hr/>
     <Posts/>
    </div>
  );
}

export default App;
