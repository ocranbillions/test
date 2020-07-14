import React from 'react'
import { useStyles } from './chart.style'

export default function Chart() {
    const classes = useStyles()
    return (
        <main className={classes.chart}>
          <div>Hello</div>  
        </main>
    )
}
