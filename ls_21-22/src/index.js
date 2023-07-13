import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App';
import { Users } from './pages/user/UserList';
import { User } from './pages/user/User';
// import { Posts } from './pages/post/PostList';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/users',
        element: <div><Users num={0}/></div>
      },
      {
        path: '/users/:id/:data',
        Component: User,
      },
      {
        path: '/posts',
        lazy: () => import('./pages/post/PostList').then(file => ({element: <file.Posts/>}))
      },
      {
        path: '/post-of-user',
        lazy: () => import('./pages/post/PostsOfUser').then(file => ({Component: file.PostsOfUser}))
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
