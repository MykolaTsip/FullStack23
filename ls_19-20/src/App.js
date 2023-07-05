import {Outlet} from "react-router-dom";

import {Navbar} from './shared/Navbar';
import Footer from './shared/Footer';



import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
    // <RouterProvider router/>
  );
}

export default App;
