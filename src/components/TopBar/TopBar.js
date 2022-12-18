import React, { useState, useEffect } from 'react'

// imports do material ui
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    useTheme,
    Switch
} from '@mui/material';

// import de images
import pretoLogo from '../../images/preto.png'
import brancoLogo from '../../images/branco.png'

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        minHeight: 35,
        zIndex: theme.zIndex.drawer + 1
    },
    grow: {
        flexGrow: 1
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    logo: {
        height: 25
    }
}))

function TopBar({darkMode, setDarkMode}) {
    const classes = useStyles()
    const theme =  useTheme()
    const [logo, setLogo] = useState([])

    useEffect(() => {
        if(theme.palette.mode === 'dark'){
            setLogo(brancoLogo)
        } else {
            setLogo(pretoLogo)
        }
    },[theme.palette.mode])
  
    return (
            <AppBar 
                className={classes.appBar}
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, boxShadow: 'none' }}
            >
                <Toolbar >
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                        className={classes.menuIcon}
                    >
                        <MenuIcon />
                    </IconButton>

                    <img src={ logo} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                        <Switch value={darkMode}
                        onChange={() => setDarkMode(!darkMode)} 
                        className={classes.icons} />
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                        className={classes.icons}
                    >
                        <VideoCallIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                        className={classes.icons}
                    >
                        <AppsIcon />
                    </IconButton>

                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 2 }}
                        className={classes.icons}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AccountCircleIcon />}
                    > Fazer Login</Button>
                </Toolbar>
            </AppBar>
    )
}

export default TopBar