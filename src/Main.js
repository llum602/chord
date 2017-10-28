import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={Create}/>
        </Switch>
    </main>
)

export default Main