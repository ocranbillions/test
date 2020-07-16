import React from 'react'
import { useStyles } from './sidebar.style'

export default function Sidebar() {
  const classes = useStyles()
  return (
    <aside className={classes.sidebar}>
      <div>
          <p>Samuel Ocran</p>
          <small>sammiestt@gmail.com</small>
      </div>  
      {/* <div className='div_two'> */}
        <div>
          <p className='title'>LAST 3 LOGINS</p>
          <div>
            <p>May 19, 2020</p>
            <small>Lagos, NG</small>
          </div>
          <div>
            <p>May 19, 2020</p>
            <small>Lagos, NG</small>
          </div>
        </div> 

        <div>
          <p className='title'>SETTINGS</p>
          <p>Upload Image</p>
          <p>Password Reset</p>
          <p>Profile</p>
        </div> 

        <div>
          <p>Logout</p>
        </div> 
      {/* </div> */}
    </aside>
  )
}
