import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

function AppRouter() {
    const [userIn, setUserIn] = useState(false);

    useEffect(()=>{
        if(sessionStorage.getItem('token')){
            setUserIn(true);
        }else{
            setUserIn(false);
        }
    }, []);
    return <Router>
        <Switch>
            {userIn?
                <Route exact path="/">
                    <Home />
                </Route>:
                <Route exact path="/"> 
                    <Auth />
                </Route>
            }
        </Switch>
    </Router>
}

export default AppRouter;