import React, {useState, useEffect} from 'react'
import './Navbar.css'

const Navbar = () => {
  return (

  <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
  <a href="/" className="logo text-2xl font-bold text-accent">
    Danielle
  </a>
  </header>

)
  /*const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
      <li className="items">Home</li>
      <li className="items">Services</li>
      <li className="items">Contact</li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn-nav">UP</button>
    </nav>
  )
}*/
};
export default Navbar;
