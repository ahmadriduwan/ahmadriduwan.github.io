import './App.css';
import './App.scss';

import { Fragment, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const setclick = () => {
    setState(!state);
    setState2(true);
  };

  const setActive = () => {
    if (state == false && state2 == false) {
      return '';
    } else if (state == false && state2 == true) {
      return ' nonactive';
    } else if (state == true && state2 == true) {
      return ' active';
    }
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
      <header className={setActive()}>
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
          <div className={'navbar ' + setActive()}>
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
                  Project
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
