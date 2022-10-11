import React from 'react';
import { Box } from '@mui/material'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage'

function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado!")
        navigate('/login')
    }

    return (
        <>
            <AppBar className="appbar" position="static" >
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" className="bold">
                            BLOG PESSOAL
                        </Typography>
                    </Box>
                    <Box className="navbar">

                        <Link to="/home" className="text-decorator-none" >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className="font">
                                    HOME
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/posts' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className="font">
                                    POSTAGENS
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className="font">
                                    TEMAS
                                </Typography>
                            </Box>
                        </Link >
                        <Link to='/formularioTema' className="text-decorator-none" >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" className="font">
                                    CADASTRAR TEMA
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" className="font">
                                Sair
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;