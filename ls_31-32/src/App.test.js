import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// import {Counter} from './components/counter/Counter';
// import {Show} from './components/show/Show';

// const spyOn = jest.fn()

jest.mock('./components/counter/Counter', () => ({Counter: () => (<div>3333</div>)}));
jest.mock('./components/show/Show', () => ({Show: ({clickSh = () => {}}) => (<div onClick={clickSh}>3333</div>)}))


describe('test App component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();


  });


  // test('should render show', () => {
  //   render(<App/>);
  //   const text = screen.getByText('I\'m show');
  //   fireEvent.click(text);
  //   expect(screen.getByTestId('show-text').textContent).toEqual('show was called');
  // })

  test('should click show', () => {
    render(<App />);

    const [, Show] = screen.getAllByText('3333');
    fireEvent.click(Show);
    // const htmlElement = getByText('show was called');
    // expect(htmlElement).toBeInTheDocument();
  })
});
