import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer wrapper'>
        <p className='legal'>Seth Klusmire 2021
        <br/>
        </p>

        <nav className='footer-container'>
          <ul className='right-footer-items'>
            <Link to='/' className='footer-item'><li>Home</li></Link>
            <Link to='/projects' className='footer-item'><li>Projects</li></Link>
            <Link to='/contact' className='footer-item'><li>Contact</li></Link>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default  Footer