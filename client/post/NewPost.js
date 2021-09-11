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
import { create } from './api-post';
import auth from '../auth/auth-helper';

export default function NewPost() {
    const [open, setOpen] = useState(false)
    const [values, setValues] = useState({
        text:'',
        photo: '',
        error: '',
        user: {}
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }  
 
    const handleSubmit = (e) => {
        e.preventDefault()
        const jwt = auth.isAuthenticated()
        let postData = new FormData()
        postData.append('text', values.text)
        postData.append('photo', values.photo)
        create({userId: jwt.user._id}, {t: jwt.token}, postData).then((data) => {
            if (data.error) {
                setValues({...values, goal: {text: ' '}})
            }
        })
        handleClose()
        // location.reload()
    }

    const handlePhoto = name => event => {
        const value = name === 'photo'
          ? event.target.files[0]
          : event.target.value
        setValues({...values, [name]: value })
      }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <AddBoxIcon  /> Post Your Goals
            </IconButton>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="form-dialog-title">Post a Goal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter the Goal and/or Photo
                        </DialogContentText>
                            <TextField 
                                label="Post a Goal"
                                required
                                error={values.goal === ''}
                                onChange={event=> setValues({...values, text: event.target.value})}
                                helperText={values.goal === '' ? 'Must enter a Goal' : ' '}
                                fullWidth
                            />
                            <input accept='/image/*' onChange={handlePhoto('photo')} type='file' id='icon-bottom-file' />
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

