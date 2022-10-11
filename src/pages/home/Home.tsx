import React, { useEffect } from 'react';
import './Home.css';
import { Box, Button, Typography, Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Home() {
    let navigate = useNavigate()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado!', {
                position: "top-right",
                autoClose: 2000,//2seg
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false, //desaparecer mesmo que o mouse esteja em cima
                draggable: false, //para nao ser movida
                theme: "colored",
                progress: undefined
            })
            navigate("/login")

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
                        <Link to='/posts' className="text-decorator-none">
                            <Button className="botao" variant="outlined"> Ver Postagens </Button>
                        </Link>
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
