import React, { useState } from 'react'

function Login(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        
    }

    return (
        <div className="container mt-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="inputUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="inputUsername" onChange={(val) => setUsername(val.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" onChange={(val) => setPassword(val.target.value)}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={login}>Submit</button>
            </form>
        </div>
    )
}

export default Login