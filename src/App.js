import './App.css';
import './App.scss';

import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [state, setState] = useState(false);
  const setclick = () => {
    setState(!state);
  };

  // const setFoods = () => {
  //   return setState(state + 1);
  // };

  useEffect(() => {
    console.log('component is mounted');
  });

  return (
    <Fragment>
      {/* {test()} */}
      <header>
        <div className="logo">
          <Link to="/">Ahmad Riduwan</Link>
        </div>
        <div
          onClick={setclick}
          className="hamburger"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav>
          <div className={state ? 'navbar active' : 'navbar'}>
            <ul class="menuItems">
              <li>
                <Link
                  to="/about"
                  data-item="About"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  data-item="Contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  data-item="gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <Outlet></Outlet>
    </Fragment>
  );
}

export default App;
