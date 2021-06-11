import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/Home/view/Home'
import Board from '../components/pages/Board/views'
import Profile from '../components/pages/Profile/views';
import Login from '../components/pages/Authentication/views/Login';
import Register from '../components/pages/Authentication/views/Register';
import Test from '../components/pages/Test/views'
class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/board" component={Board} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/test" component={Test} />
            </Switch>
        );
    }
}

export default Routing;