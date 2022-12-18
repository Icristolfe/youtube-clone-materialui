import React from 'react'

import DrawerBar from './components/Drawer/DrawerBar';
import TopBar from './components/TopBar/TopBar'
import HomeVideos from './components/HomeVideos/HomeVideos'

// imports do material ui
import { makeStyles } from '@mui/styles';

import { Box, Hidden } from '@mui/material'


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        background: theme.palette.gray,
    }
}))

function Home({darkMode, setDarkMode}) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            < TopBar darkMode={darkMode} setDarkMode={setDarkMode}  />
            <Box display='flex'>
                <Hidden mdDown >
                    < DrawerBar />
                </Hidden>
                < HomeVideos/>
            </Box>
        </div >
    )
}

export default Home