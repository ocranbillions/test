import React from 'react'
import { useStyles } from './chart.style'

export default function Chart() {
  const classes = useStyles()
  return (
    <div className={classes.chart}>
      ptf chart
    </div>
  )
}
