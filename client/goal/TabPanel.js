import React, { useState } from 'react'
import ToDos from './ToDos'
import AddGoal from './AddGoal'
import DeleteGoal from './DeleteGoal';
import AddToDo from './AddToDo'

export default function TabPanel(props) {
    const { value, index, ...other } = props;

    return (
        <div>
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`scrollable-auto-tabpanel-${index}`}
                aria-labelledby={`scrollable-auto-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <ToDos goal={props} />
                )}
            </div>
            <div>
                {value === index && (
                    <AddGoal />
                )}
            </div>
            <div>
                {value === index && (
                    <DeleteGoal goal={props} />
                )}
            </div>
            <div>
                {value === index && (
                    <AddToDo goal={props} />
                )}
            </div>
        </div>
    );
  }
  
