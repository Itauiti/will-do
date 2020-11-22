import React, {useState, useEffect} from 'react';
import NavBar from './NavBar.js';

function Header() {
  const [ headerShow, setHeaderShow ] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [headerShow]);

  const handleScroll = () =>{
    (window.scrollY > 60) ? setHeaderShow(true) : setHeaderShow(false);
  }

  return (
    <div className={headerShow ? "header header_scroll" : "header"}>
      <div className="header__container">
        <div className="header__logo">logo</div>
        <NavBar />
      </div>
    </div>
  )
}

export default Header;