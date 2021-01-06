import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CreateDialog from '../Exercises/Dialogue/Create';


export default props =>
    <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" style={{flex: 1}}>
                Exercise Database
            </Typography>
            <CreateDialog />
        </Toolbar>
    </AppBar>
