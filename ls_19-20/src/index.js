import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import ErrorComponent from './shared/Error';
import { User } from './components/User';
// import {Post} from './components/Post';
import SingleUser from './components/SingleUser';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: 'user', Component: User
      }, 
      {
        path: '/user/:id', element: <SingleUser/>
      },
      {
        path: 'post',
        lazy: () => import('./components/Post').then(c => ({Component: c.Post})),
        // element: <Post />
      },
    ]
  },
  {
    path: '*',
    element: <ErrorComponent message='Error' />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
