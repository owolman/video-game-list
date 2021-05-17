import React, { Component } from 'react'
import logo from '../res/logo.png'

class Logo extends Component {
    render() {
        return (
            <a className="navbar-brand" href="#">
                 <img src={logo} width="50" height="50" alt="" />
            </a>
        )
    }
}

export default Logo