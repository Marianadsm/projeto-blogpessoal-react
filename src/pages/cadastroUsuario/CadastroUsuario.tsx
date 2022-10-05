import react from 'react';
import './CadastroUsuario.css';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem2"> </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                    <form>
                        <Typography variant="h3" gutterBottom /*margem inferior*/ color="textPrimary" component="h3" align="center" className="cadastrar" >Cadastrar</Typography>

                        <TextField
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth />

                        <TextField
                            id="usuario"
                            label="Usuário"/*label é o unico que pode ter um acento, etc*/
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth />

                        <TextField
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth />

                        <TextField
                            id="confirmarSenha"
                            label="Confirmar senha"
                            variant="outlined"
                            name="confirmarSenha"
                            margin="normal"
                            type="password"
                            fullWidth /> 

                        <Box marginTop={2} textAlign="center"  >
                            <Link to='/login' className="text-decorator-none">
                                <Button variant="contained" color="secondary" className="btnCancelar"   >
                                    Cancelar
                                </Button>
                            </Link>

                            <Button type='submit' variant="contained" color="primary"   >
                                    Cadastrar
                                </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );

}

export default CadastroUsuario;