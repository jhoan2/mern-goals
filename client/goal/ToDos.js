import React, {useState, useEffect} from 'react'
import auth from './../auth/auth-helper'
import { 
    Box, 
    Typography,
    Grid, 
    Button, 
    ListItem, 
    List, 
    ListItemSecondaryAction, 
    ListItemText,
    Checkbox
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {dropToDo} from './api-goal'

export default function Goal(props) {
    const { goal } = props
    const toDos = goal.props.toDo
    const deleteToDo = (toDoId) => {
        dropToDo({goalId: props.goal.props._id}, toDoId).then((data) => {
            if (data && data.error) {
                console.log('Could not delete To Do')
            }
        })
    }
    return (
        <Grid container>
              <List>
                {toDos.map((data) => (
                  <Grid item key={data._id}>
                    <ListItem>
                    <Checkbox />
                      <ListItemText primary={data.text} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteToDo({toDoId: data._id})}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </Grid>
                ))}
              </List>
        </Grid>
    )
}
