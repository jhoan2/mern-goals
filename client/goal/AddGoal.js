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
import auth from '../auth/auth-helper'

export default function AddGoal() {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        goal: {
            text: ' ',
            todo: [{
                text: ' ',
            }]
        },
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }  

    const handleSubmit = (e) => {
        e.preventDefault()
        let { goal } = values
        const jwt = auth.isAuthenticated()
        create({userId: jwt.user._id}, {t: jwt.token}, goal).then((data) => {
            if (data.error) {
                setValues({...values, goal: {text: ' '}})
            }
        })
        handleClose()
        location.reload()
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
                            To create a new goal, please enter the Goal.
                        </DialogContentText>
                            <TextField 
                                label="Goal"
                                required
                                error={values.goal === ''}
                                onChange={event=> setValues({...values, goal: {text: event.target.value}})}
                                helperText={values.goal === '' ? 'Must enter a Goal' : ' '}
                                fullWidth
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
