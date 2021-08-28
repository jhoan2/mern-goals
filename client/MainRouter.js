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
import NotFound from './core/NotFound'
import PostFeed from './post/PostFeed'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Switch>
        {/* <Route path="/users" component={Users}/> */}
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/postfeed' component={PostFeed} />
        <PrivateRoute path="/" component={GoalTabs}/>
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>)
}

export default MainRouter
