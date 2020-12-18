import React from 'react'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TheatersIcon from '@material-ui/icons/Theaters';
import { useStyles } from './styles'
import { useApp } from '../../context/AppContext'

export const Sidenav = () => {
    const { open, setOpen } = useApp()
    const classes = useStyles();
    const { push } = useHistory()

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button onClick={() => push('/')}>
                    <ListItemIcon >
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Panel" />
                </ListItem>
                <ListItem button  onClick={() => push('/movies')}>
                    <ListItemIcon>
                        <TheatersIcon />
                    </ListItemIcon>
                    <ListItemText primary="Archivos" />
                </ListItem>
            </List>
        </Drawer>
    )
}
