import './App.css';
// import img from './assets/завантаження.jpg';
import { NavbarData } from './constants';

import { Footer, Navbar, Com } from './structure';

function App() {

  return (
    <div className="a">
      <Navbar data={NavbarData} />
      {/* <img src={img} /> */}

      <Com />
      <Footer />
    </div>
  );
}

export default App;
