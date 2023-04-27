import { useState } from 'react';
import './styles/nav.css'
import logo from '../assets/img/logo.svg'

const Nav = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleNavClick = () => {
    setIsShowMenu(false)
  }

  return (
    <header className='header'>
      <nav className='navbar'>

        <a href="#" className="navbar__logo">
          <img className="logo" src={logo} alt="" loading="lazy" />
        </a>

        <div className={`navbar__menu ${isShowMenu ? "show-menu" : ""}`}>
          <ul className='navbar__list'>

            <li className="navbar__item">
              <a href="#home" className='navi' onClick={handleNavClick}>
                <i className="bi bi-house-door"></i>
                <h1 className="navbar__link">HOME</h1>
              </a>
            </li>

            <li className="navbar__item">
              <a href="#the-crew" className='navi' onClick={handleNavClick}>
                <i className="bi bi-hand-index"></i>
                <h1 className="navbar__link">THE CREW</h1>
              </a>
            </li>

            <li className="navbar__item">
              <a href="#events" className='navi' onClick={handleNavClick}>
                <i className="bi bi-calendar-event"></i>
                <h1 className="navbar__link">EVENTS</h1>
              </a>
            </li>

            <li className="navbar__item">
              <a href="#what's-new" className='navi' onClick={handleNavClick}>
                <i className="bi bi-patch-question-fill"></i>
                <h1 className="navbar__link">WHAT´S NEW</h1>
              </a>
            </li>

            <li className="navbar__item">
              <a href="#virtual-office" className='navi' onClick={handleNavClick}>
                <i className="bi bi-building-check"></i>
                <h1 className="navbar__link">VIRTUAL <br /> OFFICE</h1>
              </a>
            </li>


            <li className="navbar__item">
              <a href="#contact" className='navi' onClick={handleNavClick}>
                <i className='bx bxs-contact'></i>
                <h1 className="navbar__link">CONTACT</h1>
              </a>
            </li>

            <li className="navbar__btn">
              <a className="nav-button">
                <h1 className="navbar__link">MARIA REINA PARISH</h1>
              </a>
            </li>
            <div className='social__nave-i'>
              <li className="home__social-item">
                <a className="home__social-link instagram" href="" rel="nofollow noreferrer" target="_blank">
                  <i className='bx bxl-instagram'></i>
                </a>
              </li>

              <li className="home__social-item">
                <a className="home__social-link facebook" href="" rel="nofollow noreferrer" target="_blank">
                  <i className='bx bxl-facebook'></i>
                </a>
              </li>
            </div>
          </ul>

          <i className='bx bx-x btn__close navbar__icon' onClick={() => setIsShowMenu(false)}></i>
        </div>

        <div className='btn__open navbar__icon' onClick={() => setIsShowMenu(!isShowMenu)}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Nav;
