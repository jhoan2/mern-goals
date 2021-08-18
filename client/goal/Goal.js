import React, {useState, useEffect} from 'react'
import GoalButtons from './GoalButtons'
import ToDos from './ToDos'

export default function Goal() {
    return (
        <div>
            <GoalButtons />
            <ToDos />
        </div>
    )
}
