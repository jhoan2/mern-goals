import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap';
import './styles.css'
import moment from 'moment'

export default function Calendar({values}) {
    const startDate = new Date()
    const endDate = moment(startDate)
    endDate.add(4, 'months')
    return (
        <div>
            <CalendarHeatmap
              startDate={startDate}
              endDate={endDate}
              values={values}
            />
        </div>
    )
}
