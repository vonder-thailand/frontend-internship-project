import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/pages/Home/view/Home';
import Board from 'components/pages/Board/views/Board';
import Profile from 'components/pages/Profile/views/Profile';
import Login from 'components/pages/Authentication/views/Login/Login';
import Register from 'components/pages/Authentication/views/Register/Register';
import Test from 'components/pages/Test/views/TestStartPage/Test';
import EditProfile from 'components/pages/Profile/views/EditProfile';
import TestQuestion from 'components/pages/Test/views/TestQuestion/TestQuestion';
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
                <Route exact path="/testquestion" component={TestQuestion} />
                <Route exact path="/editProfile" component={EditProfile} />
            </Switch>
        );
    }
}

export default Routing;
