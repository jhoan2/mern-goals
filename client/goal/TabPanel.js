import React from 'react'
import { 
    Box, 
    Typography,
} from '@material-ui/core'
import ToDos from './ToDos'

//need to make another component that goes where the Box is and I need to pass down the props. it is here that we iterate through toDo
export default function TabPanel(props) {
    const { value, index, ...other } = props;
  
    return (
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
    );
  }
  
