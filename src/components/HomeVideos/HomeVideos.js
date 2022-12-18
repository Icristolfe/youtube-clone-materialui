import React from 'react'


//import de imagens //
import Thumb1 from '../../images/thumb1.png'
import Thumb2 from '../../images/thumb2.png'
import Thumb3 from '../../images/thumb3.png'
import Thumb4 from '../../images/thumb4.png'
import Thumb5 from '../../images/thumb5.png'
import Thumb6 from '../../images/thumb6.png'
import Thumb7 from '../../images/thumb7.png'
import Thumb8 from '../../images/thumb8.png'
import Avatar from '../../images/avatar.jpeg'

//Import Material Ui
import { makeStyles } from '@mui/styles';
import {
    Toolbar,
    Box,
    Typography,
    Grid
} from '@mui/material'


const videos = [
    {
        id: 1,
        title:
            'FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29',
        channel: 'Ícaro Cristolfe',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb1}`,
    },
    {
        id: 2,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        channel: 'Ícaro Cristolfe',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb2}`,
    },
    {
        id: 3,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Ícaro Cristolfe',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb3}`,
    },
    {
        id: 4,
        title:
            'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
        channel: 'Ícaro Cristolfe',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb4}`,
    },
    {
        id: 5,
        title:
            'EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26',
        channel: 'Ícaro Cristolfe',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb5}`,
    },
    {
        id: 6,
        title: 'COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01',
        channel: 'Ícaro Cristolfe',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb6}`,
    },
    {
        id: 7,
        title:
            'PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01',
        channel: 'Ícaro Cristolfe',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb7}`,
    },
    {
        id: 8,
        title:
            'GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04',
        channel: 'Ícaro Cristolfe',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: `${Avatar}`,
        thumb: `${Thumb8}`,
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark
    },
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
function HomeVideos() {
    const classes = useStyles()
    return (
        <Box p={8} className={classes.root}>
            <Toolbar />
            <Typography
                variant='h5'
                color='textPrimary'
                style={{ fontWeight: 600 }}
            >
                Recomendados
            </Typography>

            <Grid container spacing={4}>
                {
                    videos.map((item, index) => (
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                            <Box>
                                <img
                                    style={{ width: '100%' }}
                                    alt={item.title}
                                    src={item.thumb}
                                />
                                <Box>
                                    <Typography
                                        style={{ fontWeight: 600 }}
                                        gutterBottom
                                        variant='body1'
                                        color='textPrimary'
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        display='block'
                                        variant='body2'
                                        color='textSecondary'
                                    >
                                        {item.channel}
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary'>
                                        {`${item.views} • ${item.date}`}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default HomeVideos
