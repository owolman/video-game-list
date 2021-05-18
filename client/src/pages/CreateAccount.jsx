import React, { useState } from 'react'
import api from '../api/index.js'

function CreateAccount(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [exists, setExists] = useState(false)

    const create = (e) => {
        setSubmitted(true)
        if (username.length !== 0 && password.length !== 0 && password === confirmPassword &&
            email.length !== 0 && email === confirmEmail) {
            setExists(false)
            api.createUser({ username: username, password: password, email: email }).catch(error => setExists(true)).then( () => {
                    if(!exists) {
                        props.history.push('/')
                    }
                }
            )
        }
    }

    return (
        <>
            <div className="container mt-3">
                <form className="needs-validation">
                    <div className="mb-3">
                        <label htmlFor="inputUsername" className="form-label">Username</label>
                        <input type="text" className={`form-control ${submitted && username.length === 0 ? 'is-invalid' : ''}`} id="inputUsername" onChange={(val) => setUsername(val.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a valid username.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">Password</label>
                        <input type="password" className={`form-control ${submitted && password.length === 0 ? 'is-invalid' : ''}`} id="inputPassword" onChange={(val) => setPassword(val.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a valid password.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className={`form-control ${submitted && (confirmPassword.length === 0 || password !== confirmPassword) ? 'is-invalid' : ''}`} id="inputConfirmPassword" onChange={(val) => setConfirmPassword(val.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a valid, matching password.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Email Address</label>
                        <input type="email" className={`form-control ${submitted && email.length === 0 ? 'is-invalid' : ''}`} id="inputEmail" onChange={(val) => setEmail(val.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a valid  email.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputConfirmEmail" className="form-label">Confirm Email Address</label>
                        <input type="email" className={`form-control ${submitted && (confirmEmail.length === 0 || email !== confirmEmail) ? 'is-invalid' : ''}`} id="inputConfirmemail" onChange={(val) => setConfirmEmail(val.target.value)} />
                        <div className="invalid-feedback">
                            Please choose a valid, matching email.
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mb-3" onClick={create}>Submit</button>
                    {exists ? <div className="alert alert-danger" role="alert">
                        An Account with this Username and/or Email Already Exists
                    </div> : <></>}
                </form>
            </div>
        </>
    )
}

export default CreateAccount