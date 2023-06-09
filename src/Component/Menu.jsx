import React from 'react'

const Menu = () => {
  return (
    <>
    <Menu>
        <MenuButton as={Button}></MenuButton>
            <MenuList>
                <MenuItem>Solution</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>Resources</MenuItem>
                <MenuItem>Try LearnDash</MenuItem>
            </MenuList>
    </Menu></>
  )
}

export default Menu