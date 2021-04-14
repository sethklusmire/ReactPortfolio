import React, { useState } from 'react'
import "./style.css";
import { Menu } from 'semantic-ui-react'

function NavBar() {
  const [name, setName] = useState({})

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  const handleInputClick = (e) => {
      setName(e.target.value)
  }

    return (
      <Menu>
        <Menu.Item
          name='home'
        //   active={activeItem === 'home'}
          onClick={handleInputClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='about'
        //   active={activeItem === 'projects'}
          onClick={handleInputClick}
        >
          About
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='projects'
            // active={activeItem === 'resume'}
            onClick={handleInputClick}
          >
            Projects
          </Menu.Item>

          <Menu.Item
            name='contact'
            // active={activeItem === 'contact'}
            onClick={handleInputClick}
          >
            Contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  
}

export default NavBar