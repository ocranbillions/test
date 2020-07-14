import React from 'react'
import { useStyles } from './navbar.styles'

export default function Navbar() {
    const classes = useStyles()
    return (
        <nav className={classes.navbar}>
            <div className={classes.leftItems}>
                <div className='logo'>LOGO!</div>
                {/* <span>Dashboard</span> */}
            </div>

            <div className={classes.rightItems}>
                <div className='transact'>
                    <span>Submit Teller</span>
                    <span>Transfer Money</span>
                </div>
                <div className='others'>
                    <button>+ Add Account</button>
                    <i>Bell</i>
                    <span className='image'>Pic</span>
                </div>
            </div>
        </nav>
    )
}
