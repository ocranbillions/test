import React from 'react'
import { useStyles } from './sidebar.style'

export default function Sidebar() {
    const classes = useStyles()
    return (
        <aside className={classes.sidebar}>
          <div>Hello</div>  
        </aside>
    )
}
