import React from 'react'

const Header = () => {
    return (
      <nav className="white" role="navigation">
      <div className="nav-wrapper container">
      <i className="fas fa-dog fa-2x" style={{color:'black',marginRight:'20px'}}></i><a id="logo-container" href="/" class="brand-logo" style={{color:'black'}}>Dinder</a>
        <ul className="right hide-on-med-and-down" >
        <li><a href="/" style={{color:'black'}}>Help</a></li>
        <li><a href="/" style={{color:'black'}}>About</a></li>
        </ul>
        <ul id="nav-mobile" class="sidenav">
        <li><a href="/">Help</a></li>
        <li><a href="/">About</a></li>
        </ul>
        <a href="/" data-target="nav-mobile" className="sidenav-trigger" style={{color:'black'}}><i class="material-icons">menu</i></a>
      </div>
    </nav>
    )
}

export default Header;