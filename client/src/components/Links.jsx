import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand link-secondary">
                    Video Game List
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav mr-auto">
                        <div className="collapse navbar-collapse">
                            <Link to="/movies/list" className="nav-link link-secondary">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Links