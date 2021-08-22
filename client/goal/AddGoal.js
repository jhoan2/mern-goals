import React, { useState } from 'react'
import {   
    IconButton, 
    Dialog, 
    DialogActions, 
    DialogContentText, 
    DialogContent,
    DialogTitle,
    TextField,
    Button,
} from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox';
import { create } from './api-goal';

export default function AddGoal(props) {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        goal: {
            text: ' ',
            todo: [{
                text: ' ',
            }]
        }
    })
    
    console.log(values.goal.text)
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        let goalData = new FormData()
        // goalData.append('goal', values.goal.text)
        // goalData.append('todo', values.todo)
        // create(goalData).then((data) => {
        //     if (data.error) {
        //         setValues({...values, goal:'', todo: ''})
        //     } else {
        //         setValues({...values, goal: '', todo: ''})
        //     }
        // })
        alert('Submit Successful')
    }
    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <AddBoxIcon  />
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Create a New Goal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a new goal, please enter the Goal with three steps as todos. 
                        </DialogContentText>
                            <TextField 
                                label="Goal"
                                required
                                error={values.goal === ''}
                                //onChange={event=> setValues({goal: event.target.value})}
                                helperText={values.goal === '' ? 'Must enter a Goal' : ' '}
                            />
                            <TextField 
                                label="First To Do"
                                required
                                error={values.todo === ''}
                                // onChange={event => setValues({todo: event.target.value})}
                                helperText={values.todo === '' ? 'Must enter one to do' : ' '}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button type="submit">
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
