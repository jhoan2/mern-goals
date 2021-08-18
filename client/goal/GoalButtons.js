import React, {useState, useEffect} from 'react'
import auth from './../auth/auth-helper'
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import { listGoals } from './api-goal'
import { Grid, Button } from '@material-ui/core'
// const useStyles = makeStyles(theme => ({

// }))



export default function GoalButtons() {
    // const classes = useStyles()
    const [goals, setGoals] = useState([])
    const jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
    
        listGoals(signal).then((data) => {
          if (data && data.error) {
            console.log(data.error)
          } else {
            setGoals(data)
          }
        })
    
        return function cleanup(){
          abortController.abort()
        }
      }, [])

    return (
        <Grid container spacing={2} >
            {goals.map((data) => (
                <Grid item key={data._id}>
                    <Button variant='contained'>{data.text}</Button>
                </Grid>
            ))}
        </Grid>
    )
}
