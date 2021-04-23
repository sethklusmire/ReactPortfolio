import React from 'react'
import MyButton from '../MyButton'
import './project-section.css'

class ProjectSection extends React.Component {
  renderDirection() {
    let imageContainerClass = ''
    let imageClass = 'frame'

    if (this.props.direction === 'right') {
      imageContainerClass = 'image-container-right'
    } else if (this.props.direction === 'left') {
      imageContainerClass = 'image-container-left'
    }
    
    return (
      <div className={imageContainerClass}>
        {this.props.web ?
          <div className='desktop-header'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          : null}
        {this.props.mobile ? <div className='iphone-header'></div> : null}
        <img src={this.props.src} alt='' className={imageClass}/>
        {this.props.mobile ?
          <div className='iphone-footer'>
            <span></span>
          </div>
          : null}
        {this.props.web ? <div className='desktop-stand'></div> : null}
        {this.props.web ? <div className='desktop-base'></div> : null}
      </div>
    )
  }

  render() {
    return (
      <section className={'project-section ' + this.props.className}>
        <div className='inner-section inner-project wrapper'>
          <div className='project-content'>
            {this.props.direction === 'left' ? this.renderDirection() : null}
            <article className='project-description-container'>
              <h3 className='project-title'>{this.props.title}</h3>
              <div className='project-text'>
                {this.props.children[0]}
              </div>
              {this.props.children[1]}
              <a href={this.props.repoLink || '/'}><MyButton title='View Git Repo' theme='blue' className='project-button'/></a>
              {this.props.liveLink ? <a href={this.props.liveLink || '/'}><MyButton title='View Live Site' theme='white' className='project-button'/></a> : null}
            </article>
            {this.props.direction === 'right' ? this.renderDirection() : null}
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectSection