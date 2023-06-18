import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Age from './AgeLog'
import { Name } from './Name';

import reportWebVitals from './reportWebVitals';

let b = 1
// const List = () => {

//   return (
//     <div>
//       <p>
//         lorem dsfsdfsd
//       </p>
//       <div>
//         <div>

//         </div>
//       </div>
//     </div>
//   )

// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App a={b} name='Nick' />
    <h1>
      Heeee
    </h1>
    <Age> 
      <div>
        
        <strong> <i> My age 33 </i></strong>
      </div>  
    </Age>
   { React.createElement(Name) }
  </div>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
