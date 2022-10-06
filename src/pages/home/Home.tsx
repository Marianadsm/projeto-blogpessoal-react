import React from 'react';
import './Home.css';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" justifyContent="center" item xs={12} md={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Button  className="botao" variant="outlined">
                            Ver Postagens
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} alignItems="center" justifyContent="center" >
                    <img src="https://i.imgur.com/g5hxGQx.png" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem/>
                </Grid>
            </Grid>
        </>
    );

}

export default Home;
