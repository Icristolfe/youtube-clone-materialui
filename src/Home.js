import React from 'react'

import DrawerBar from './components/Drawer/DrawerBar';
import TopBar from './components/TopBar/TopBar'

// imports do material ui
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh'
    }
} )

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            < TopBar />
            < DrawerBar />
        </div >
    )
}

export default Home