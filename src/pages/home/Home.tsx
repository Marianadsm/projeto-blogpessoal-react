import React from 'react';
import './Home.css';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa' >
                <Grid alignItems="center" justifyContent="center" item xs={12} md={6}>
                    <Box  paddingX={20} >
                        <Typography variant="h3" gutterBottom  component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom  component="h5" align="center" className='titulo'>Expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" >
                        <Link to ='/login'className='text-decorator-none'> 
                            <Button variant="outlined" style={{ fontWeight: 'bold' }}>
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} alignItems="center" justifyContent="center" >
                    <img src="https://i.imgur.com/g5hxGQx.png" alt="" width="100%" height="100%" />
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    );

}

export default Home;
