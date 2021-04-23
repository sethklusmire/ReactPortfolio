import React from 'react'
import {Link} from 'react-router-dom'
import MyButton from '../MyButton'
import './contact-section.css'

class ContactSection extends React.Component {
  render() {
    return (
      <section className='inner-section inner-contact wrapper'>
        <h2 className='contact-title'>Contact Me</h2>
        <Link to='/contact' className='contact-button'><MyButton title='Reach Out' theme='blue' /></Link>
      </section>
    )
  }
}

export default ContactSection