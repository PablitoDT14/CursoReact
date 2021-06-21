import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import NavBar from '../components/NavBar'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'


function AppRouter() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/products" component={Products}/>
            </Switch>
        </Router>
    )
}

export default AppRouter