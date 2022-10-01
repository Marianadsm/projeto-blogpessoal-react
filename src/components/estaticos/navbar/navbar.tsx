import { Button } from '@mui/material';
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className="navbartitle" >
                            Blog Pessoal
                        </Typography>
                        <Typography>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Postagens</Button>
                        <Button color="inherit">Temas</Button>
                        <Button color="inherit">Cadastrar Tema</Button>
                        <Button color="inherit">Logout</Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Navbar;