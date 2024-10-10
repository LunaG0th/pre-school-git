import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  // mobile nav
  const [clicked, setCliked] = useState(false);

  const handleClick = () => {
    setCliked(!clicked);
  };

  const closeMobileNav = () => {
    setCliked(false);
  };

  // sticky nav
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 100 ? setSticky(true) : setSticky(false);
    });
  }, []);

  console.log(clicked);
  return (
    <nav>
      <div
        className={`navbar ${sticky ? 'dark__nav' : ''} ${
          clicked ? '' : 'navbar__toggle'
        }`} 
      >
        <Link to='hero' smooth={true} duration={500} offset={0}>
          <img src='../../logo.png' alt='' onClick={handleClick} />
        </Link>
        <ul>
          <li>
            <Link
              to='about'
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              activeClass='active'
              onClick={closeMobileNav}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='testimonials'
              smooth={true}
              duration={500}
              offset={-100}
              spy={true}
              activeClass='active'
              onClick={closeMobileNav}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              smooth={true}
              duration={500}
              offset={-110}
              spy={true}
              activeClass='active'
              onClick={closeMobileNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className='mobile__nav'>
        <span className='material-symbols-outlined' onClick={handleClick}>
          {clicked ? 'more_vert' : 'more_horiz'}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
