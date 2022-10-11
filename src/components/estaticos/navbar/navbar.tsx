import React from 'react';
import { Box } from '@mui/material'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify'

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const dispatch = useDispatch();

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
            position: "top-right", 
            autoClose: 2000,//2seg
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false, //desaparecer mesmo que o mouse esteja em cima
            draggable: false, //para nao ser movida
            theme: "colored",
            progress: undefined
        })
        navigate('/login')
    }

    var navbarComponent;

    if(token != ''){
        navbarComponent =  <AppBar className="appbar" position="static" >
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
    }

    return (
        <>
          {navbarComponent} 
        </>
    )
}

export default Navbar;