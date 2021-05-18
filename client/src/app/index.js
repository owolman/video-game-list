import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, Login, CreateAccount } from '../pages'
import '../style/App.scss'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login}/>
                <Route path="/create" exact component={CreateAccount}/>
            </Switch>
        </Router>
    )
}

export default App