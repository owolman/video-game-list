import React from 'react'
import Logo from './Logo'
import Links from './Links'


function NavBar (props) {
    return (
        <nav className="px-3 navbar navbar-expand-lg bg-primary">
            <Logo />
            <Links count={4} />
        </nav>
    )
}
export default NavBar