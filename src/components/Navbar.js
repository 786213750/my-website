import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../svg/TJ-logo.svg';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='logo' className='navbar-logo-img' />
          </Link>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
