import React from 'react'

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
} from '@mui/material';

// import de images
import pretoLogo from '../../images/preto.png'

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        minHeight: 46,
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

function TopBar() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar color='inherit'
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

                    <img src={pretoLogo} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />

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
                        color="primary"
                        startIcon={<AccountCircleIcon />}
                    > Fazer Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar