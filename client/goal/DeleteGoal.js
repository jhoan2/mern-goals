import React, { useState } from 'react'
import {   
    IconButton, 
} from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { remove } from './api-goal';

export default function DeleteGoal({goal}) {
 
    const handleClick = () => {
        remove({goalId: goal.props._id}).then((data) => {
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
