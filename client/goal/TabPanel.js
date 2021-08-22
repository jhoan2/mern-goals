import React, { useState } from 'react'
import ToDos from './ToDos'
import AddGoal from './AddGoal'

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
                    <AddGoal goal={props} />
                )}
            </div>
        </div>
    );
  }
  
