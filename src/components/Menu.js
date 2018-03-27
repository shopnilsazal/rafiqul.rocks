import React from 'react'
import Link from 'gatsby-link'

class Menu extends React.Component {
  componentWillUpdate() {
    let menu = document.querySelector('.menu--adsila')
    menu.classList.remove('menu-open')
  }

  render() {
    const handleClick = e => {
      let menu = document.querySelector('.menu--adsila')
      menu.classList.toggle('menu-open')
    }

    return (
      <nav className="menu menu--adsila">
        <span className="menu-title" onClick={handleClick}>
          Menu
        </span>
        <Link className="menu__item" to="/">
          <span className="menu__item-name">Home</span>
        </Link>
        <Link className="menu__item" to="/tags">
          <span className="menu__item-name">Tags</span>
        </Link>
        <Link className="menu__item" to="/resume">
          <span className="menu__item-name">Resume</span>
        </Link>
      </nav>
    )
  }
}

export default Menu
