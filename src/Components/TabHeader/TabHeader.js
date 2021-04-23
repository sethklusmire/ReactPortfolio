import React from 'react'
import './tab-header.css'

class TabHeader extends React.Component {
  render() {
    return (
      <section className='inner-section tab-header'>
        <h1 className='tab-header-title'>{this.props.title}</h1>
        <h2 className='tab-header-subtitle'>{this.props.subtitle}</h2>
      </section>
    )
  }
}

export default TabHeader