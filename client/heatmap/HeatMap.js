import React, { useEffect, useState } from 'react'
import { create, getHeatMapData } from './api-heatmap'
import auth from '../auth/auth-helper'

export default function HeatMap() {
    const [values, setValues] = useState()
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const jwt = auth.isAuthenticated()
          getHeatMapData({userId: jwt.user._id}, {t: jwt.token}, signal).then((data) => {
            if (data && data.error) {
              console.log(data.error)
            } else if (data === undefined || data.length === 0) {
                create({userId: jwt.user._id})
            }else {
              setValues(data)
            }
          })
      
          return function cleanup(){
            abortController.abort()
          }
        }, []) 
        console.log(values)
    return (
        <div>
            <p>hello</p>
        </div>
    )
}
