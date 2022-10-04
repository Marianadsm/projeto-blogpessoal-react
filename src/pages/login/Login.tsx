import React from 'react';
import { Button, Grid, TextField } from "@material-ui/core";
import { Box, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12} md={6}>
                <Box paddingX={20} >
                    <form>
                        <Typography variant="h3" gutterBottom /*margem inferior*/ color="textPrimary" component="h3" align="center" className="textos1" style={{ fontWeight: 'bold' }}>Entrar</Typography>
                        <TextField id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">
                            <Link to='/home'>
                                <Button type="submit" variant="contained" color="primary">
                                    Entrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                    </Box>
                    <Typography variant="subtitle1" gutterBottom align="center" style={{ fontWeight: 'bold' }} className="textos1">Cadastre-se</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} style={{
                backgroundImage: `url(https://i.imgur.com/c1eTJAQ.png)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
            </Grid>

        </Grid>
    );
}

export default Login;