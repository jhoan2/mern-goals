import React from 'react'
import { 
    Grid, 
    ListItem, 
    List, 
    ListItemSecondaryAction, 
    ListItemText,
    Checkbox
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {dropToDo} from './api-goal'
import auth from '../auth/auth-helper';
import { addDate } from '../heatmap/api-heatmap';

export default function Goal(props) {
    const { goal } = props
    const toDos = goal.props.toDo
    const jwt = auth.isAuthenticated();

    const deleteToDo = (toDoId) => {
        dropToDo({goalId: props.goal.props._id}, {t: jwt.token}, toDoId).then((data) => {
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
                    <Checkbox onChange={() => addDate({userId: jwt.user._id}, {t: jwt.token})}/>
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
