import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignUp from '../pages/signUp';
import SignIn from '../pages/signIn'

const Routes: React.FC = ()=>{
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
}

export default Routes