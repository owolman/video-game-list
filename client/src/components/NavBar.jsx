import React, { Component } from 'react'

import Logo from './Logo'
import Links from './Links'


class NavBar extends Component {
    render() {
        return (
            <nav className="px-3 navbar navbar-expand-lg bg-primary">
                <Logo />
                <Links />
            </nav>
        )
    }
}

export default NavBar