import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false
    }
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.closeMobileMenu = this.closeMobileMenu.bind(this)
  }

  buildLink(pathName, linkText) {
    let homeClasses = classNames('nav-item', {active: this.props.location.pathname === pathName})
    return <Link to={pathName} className={homeClasses}><li>{linkText}</li></Link>
  }

  buildMobileLink(pathName, linkText) {
    let homeClasses = classNames('mobile-item', {active: this.props.location.pathname === pathName})
    return <Link to={pathName} className={homeClasses} onClick={this.closeMobileMenu}><li>{linkText}</li></Link>
  }

  toggleMobileMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    })
  }

  closeMobileMenu() {
    this.setState({
      showMobileMenu: false
    })
  }

  render() {
    return (
      <header className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='nav-logo'>
            <h2 className='nav-logo-text'>sk</h2>
          </Link>
          <nav className='nav-container'>
            <ul className='right-nav-items'>
              {this.buildLink('/', 'Home')}
              {this.buildLink('/projects', 'Projects')}
              {this.buildLink('/about', 'About')}
              {this.buildLink('/contact', 'Contact')}
            </ul>
            <div className={this.state.showMobileMenu ? 'hamburger-container change' : 'hamburger-container'} onClick={this.toggleMobileMenu}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </nav>
        </div>
        <div className={this.state.showMobileMenu ? 'mobile-menu-display' : 'mobile-menu-hidden'} >
          <ul className='mobile-items'>
            {this.buildMobileLink('/', 'Home')}
            {this.buildMobileLink('/projects', 'Projects')}
            {this.buildMobileLink('/about', 'About')}
            {this.buildMobileLink('/contact', 'Contact')}
          </ul>
        </div>
      </header>
    )
  }
}

export default NavBar