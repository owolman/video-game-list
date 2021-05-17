import React, { Component } from 'react'
import api from '../api'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
     
        }
    }

    addUser = () => {
        api.createUser({username: 'test', password: 'pass'});
    }


    render() {
        return (
            <>
                <button className="btn btn-primary" onClick={this.addUser}>Add User Test</button>
            </>
        )
    }
}

export default Home