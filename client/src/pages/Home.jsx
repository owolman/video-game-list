import React from 'react'
import api from '../api'

function Home (props) {
   
    const addUser = () => {
        api.createUser({username: 'test', password: 'pass'});
    }

    return (
        <>
            <button className="btn btn-primary" onClick={() => addUser}>Add User Test</button>
        </>
    )
}

export default Home