import React, { useEffect } from 'react';
import './Home.css';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import useLocalStorage from 'react-use-localstorage';

function Home() {
    let navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if(token !== '') {
            alert('Você precisa estar logado!')
            navigate('/login')
        }
    }, [token])

    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" justifyContent="center" item xs={12} md={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button className="botao" variant="outlined">
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} alignItems="center" justifyContent="center" >
                    <img src="https://i.imgur.com/g5hxGQx.png" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );

}

export default Home;
