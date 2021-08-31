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
import { addToDo } from './api-goal';
import auth from '../auth/auth-helper';

export default function AddGoal(props) {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        text: ''
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }  

    const toDo = {
        text: values.text || undefined
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const jwt = auth.isAuthenticated()
        addToDo({goalId: props.goal.props._id}, {t: jwt.token}, toDo).then((data) => {
            if (data && data.error) {
                setValues({...values, text: ' '})
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
                    <DialogTitle id="form-dialog-title">Create a New To Do</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To create a new To Do, please enter the To Do.
                        </DialogContentText>
                            <TextField 
                                label="To Do"
                                required
                                error={values.goal === ''}
                                onChange={event=> setValues({...values, text: event.target.value})}
                                helperText={values.goal === '' ? 'Must enter a To Do' : ' '}
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
