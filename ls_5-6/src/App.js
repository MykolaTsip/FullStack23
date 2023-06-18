import React from 'react';


function App(qwe) {

console.log(qwe);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          {
            qwe.a
          }
          {
            'ddd'
          }
        </a>
      </header>
    </div>
  );
}

export default App;
