import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'


function AppRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/products/:id" component={ItemDetailContainer} />
                {/*<Route path="*" component={NotFound}/>*/}
            </Switch>
        </Router>
    )
}

export default AppRouter