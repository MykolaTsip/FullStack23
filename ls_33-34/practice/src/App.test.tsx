import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {  BrowserRouter as Router } from 'react-router-dom';

// const checkClick = jest.fn();
// jest.mock('react-router-dom', () => ({Link: checkClick, Outlet: <div></div> }))

describe(' App ', () => {

  test('renders learn react link', () => {
    render(
    <Router>
      <App />
    </Router>
    );
    const linkElement = screen.getByTestId('post');
    fireEvent.click(linkElement);

      // expect(window.location.assign).toBeCalledTimes(1);
    // expect(linkElement).toBeInTheDocument();
  });

  test('Clicking on the posts link should navigate to the posts page', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  
    const postsLink = screen.getByTestId('home');
    fireEvent.click(postsLink);
  
    // Add your assertions here
  });
})

