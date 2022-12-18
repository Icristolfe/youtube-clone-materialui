import React from 'react'

// imports do material ui
import { makeStyles } from '@mui/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import {
    Toolbar,
    Button,
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader
} from '@mui/material';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    listItemText: {
        fontSize: 14,
    },
    ListItemButton: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase',
    },
}))


function DrawerBar() {
    const classes = useStyles()
    return (
        <Drawer
            variant="permanent"
            sx={{
                fontSize: 49,
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: 'none' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Início'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Em Alta'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Inscrições'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Biblioteca'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Histórico'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <Box p={7}>
                    <Typography variant="body2" >
                        Faça login para curtir videos, comentar e se inscrever
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<AccountCircleIcon />}
                    > Fazer Login</Button>
                </Box>
                <Divider />
                <List
                    component='nav'
                    aria-labelledby='nested-list-subheader'
                    subheader={
                        <ListSubheader
                            component='div'
                            id='nested-list-subheader'
                            className={classes.subheader}
                        >
                            O Melhor do youtube
                        </ListSubheader>
                    }
                >
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Músicas'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Esportes'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Jogos'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Filmes'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Notícias'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Ao vivo'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Destaque'} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton classes={{ root: classes.ListItemButton }} >
                            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }}
                                primary={'Video 360°'} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default DrawerBar