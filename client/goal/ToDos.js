import React, {useState, useEffect} from 'react'
import auth from './../auth/auth-helper'
import { listGoals } from './api-goal'
import { 
    Box, 
    Typography,
    Grid, 
    Button, 
    ListItem, 
    List, 
    ListItemSecondaryAction, 
    ListItemText,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

export default function Goal(props) {
    const { goal } = props
    const toDos = goal.props.toDo
    return (
        <Grid container>
              <List>
                {toDos.map((data) => (
                  <Grid item key={data._id}>
                    <ListItem>
                      <ListItemText primary={data.text} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
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
