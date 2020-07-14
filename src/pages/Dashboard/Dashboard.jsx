import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Chart from '../../components/Chart/Chart'
import { useStyles } from './dashboard.style'

export default function Dashboard() {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Navbar/>
            <main className={classes.main}>
                <Sidebar/>
                <Chart/>
            </main>
        </React.Fragment>
    );
}
