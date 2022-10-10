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
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            BLOG-PESSOAL
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">

                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    HOME
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/posts' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    POSTAGENS
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    TEMAS
                                </Typography>
                            </Box>
                        </Link >
                        <Link to='/formularioTema' className="text-decorator-none" >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    CADASTRAR TEMA
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
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