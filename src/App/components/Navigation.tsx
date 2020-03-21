import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaTwitter, FaGithub } from 'react-icons/fa'

import { Header } from 'shared'

const MenuWrapper = styled.div`
`

const MenuSection = styled.div``

const Menu = styled.ul`
`

const MenuItem = styled.li`
`

const activeStyle = {
}

const Navigation = () => {
    return <MenuWrapper>
        <MenuSection>
            <Menu>
                <MenuItem><NavLink exact activeStyle={activeStyle} to="/">Home</NavLink></MenuItem>
                <MenuItem><a target="_blank" href="https://github.com/TravisBumgarner/online-outings"><FaGithub /></a></MenuItem>
                <MenuItem><a target="_blank" href="https://twitter.com/travis_the_makr"><FaTwitter /></a>.</MenuItem>
            </Menu>
        </MenuSection>
    </MenuWrapper >
}

export default Navigation