import React from 'react'
import { Link } from 'react-router-dom'


function Links (props) {
    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand link-secondary">
                Video Game List
            </Link>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav mr-auto">
                    <div className="collapse navbar-collapse">
                        <Link to="/login" className="nav-link link-secondary">
                            Login
                        </Link>
                        <Link to="/create" className="nav-link link-secondary">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Links