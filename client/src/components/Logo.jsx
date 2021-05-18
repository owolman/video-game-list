import React from 'react'
import logo from '../res/logo.png'

function Logo (props) {
    return (
        <a className="navbar-brand" href="https://youtube.com">
                <img src={logo} width="50" height="50" alt="" />
        </a>
    ) 
}
export default Logo