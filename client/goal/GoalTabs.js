import React, {useState, useEffect} from 'react'
import { listGoals } from './api-goal'
import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core'
import TabPanel from './TabPanel';

export default function GoalTabs() {

    const [goals, setGoals] = useState([])
    const [value, setValue] = useState(0);

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
    
        listGoals(signal).then((data) => {
          if (data && data.error) {
            console.log(data.error)
          } else {
            setGoals(data)
          }
        })
    
        return function cleanup(){
          abortController.abort()
        }
      }, [])
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs"
            >
              {goals.map((data) => {
                return <Tab label={data.text} key={data._id} />
              })}

            </Tabs>
        </AppBar>

        {goals.map((data, index) => {
          return <TabPanel value={value} index={index} props={data} key={data._id} />
        })}
        </div>
    )
}
