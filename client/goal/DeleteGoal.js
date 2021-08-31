import React, { useState } from 'react'
import {   
    IconButton, 
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { remove } from './api-goal';
import auth from '../auth/auth-helper'

export default function DeleteGoal({goal}) {
 
    const handleClick = () => {
        const jwt = auth.isAuthenticated();
        remove({goalId: goal.props._id}, {t: jwt.token}).then((data) => {
            if (data.error) {
                console.log(data.error)
            }
        })
        location.reload()
    }

    return (
        <div>
            <IconButton onClick={() => handleClick()}>
                <HighlightOffIcon  />
            </IconButton>
        </div>
    )
}
