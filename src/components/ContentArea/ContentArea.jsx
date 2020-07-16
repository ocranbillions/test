import React from 'react'
import { useStyles } from './content.style'
import Chart from '../Chart/Chart'

export default function ContentArea() {
  const classes = useStyles()
  return (
    <div className={classes.content}>
      <Chart/>
    </div>
  )
}
