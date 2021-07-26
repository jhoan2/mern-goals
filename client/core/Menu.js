import React from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button,
  Grid
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4081'}
  else
    return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => (
  <AppBar position="static">
    <Toolbar >
      <Grid container alignItems='center' >
        <Grid item sm={4} md={2} lg={3}>
          <Typography variant="h6" color="inherit" style={{textAlign: "center"}}>
            MERN Goals
          </Typography>
        </Grid>

        <Grid container item sm={4} md={8} lg={6} style={{justifyContent: "center"}}>
        {
        auth.isAuthenticated() && (<span>
          <Link to="/">
            <IconButton aria-label="Home"  style={isActive(history, "/")}>
              <HomeIcon/>
            </IconButton>
          </Link>
          <Link to="/">
            <IconButton aria-label="Feed" style={isActive(history, "/")}>
              <DynamicFeedIcon />
            </IconButton>
          </Link>
          <Link to="/">
            <IconButton aria-label="Calendar" style={isActive(history, "/")}>
              <CalendarTodayIcon />
            </IconButton>
          </Link></span>)
        }


        <Grid item>
          {
            !auth.isAuthenticated() && (<span>
              <Link to="/signin">
                <Button style={isActive(history, "/signin")}>Sign In
                </Button>
              </Link>
            </span>)
          }
          </Grid>
        </Grid>
        
        <Grid container item sm={4} md={2} lg={3} style={{justifyContent: "flex-end"}} >
          {
            auth.isAuthenticated() && (<span>
              <Link to={"/user/" + auth.isAuthenticated().user._id}>
                <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}><AccountCircleIcon /></Button>
              </Link>
              <Button color="inherit" onClick={() => {
                  auth.clearJWT(() => history.push('/'))
                }}>Sign out</Button>
            </span>)
          }
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
))

export default Menu
