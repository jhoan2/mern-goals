import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import GoalTabs from './goal/GoalTabs'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        {/* <Route path="/users" component={Users}/> */}
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/user/:userId" component={Profile}/>
        <PrivateRoute path="/" component={GoalTabs}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
      </Switch>
    </div>)
}

export default MainRouter
