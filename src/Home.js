import React from 'react'

// imports do material ui
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

// import de images
import pretoLogo from './images/preto.png'


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    appBar: {
        boxShadow: 'none' ,
        position: 'sticky',
        zIndex: theme.zIndex.drawer + 1,
        drawer: {
            width: 240,
            flexShrink: 0
        },
        drawerPaper: {
            width: 240
        },

    },
    grow: {
        flexGrow: 1
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    menuIcon : {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6)
    },
    logo: {
        height: 25
    }
}))

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
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

            <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
        </div>
    )
}

export default Home