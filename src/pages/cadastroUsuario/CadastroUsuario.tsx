import React, { useState, useEffect, ChangeEvent } from 'react';
import './CadastroUsuario.css';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service'

function CadastroUsuario() {
    
        let navigate = useNavigate();
        const [confirmarSenha, setConfirmarSenha] = useState<String>('');
        
        function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
          setConfirmarSenha(event.target.value);
        }
      
        // One way binding
        const [user, setUser] = useState<User>({
          id: 0,
          nome: '',
          usuario: '',
          senha: ''
        });
      
        const [userResult, setUserResult] = useState<User>({
          id: 0,
          nome: '',
          usuario: '',
          senha: ''
          
        });
      
        function updatedModel(event: ChangeEvent<HTMLInputElement>) {
          setUser({
            ...user,
            [event.target.name]: event.target.value,
          });
        }
      
      
        async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
          event.preventDefault();
          if (confirmarSenha === user.senha && user.senha.length >= 8) {
            try {
              await cadastroUsuario('usuarios/cadastrar', user, setUserResult);
              alert('Usuário criado com sucesso. Efetue seu login, por favor.');
            } catch (error) {
              alert('Falha ao cadastrar o usuário. Por favor, confira os campos');
            }
          } else {
            alert(
              'Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.'
            );
          }
        }
      
        useEffect(() => {
          if (userResult.id !== 0) {
            navigate('/login');
          }
        }, [userResult]);

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem2"> </Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10} >
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom /*margem inferior*/ color="textPrimary" component="h3" align="center" className="cadastrar" >Cadastrar</Typography>

                        <TextField
                            required
                            value={user.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="Nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
                            fullWidth />

                        <TextField
                         value={user.usuario}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            required
                            id="usuario"
                            label="Usuário"/*label é o unico que pode ter um acento, etc*/
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth />

                        <TextField
                         value={user.senha}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            required
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth />

                        <TextField
                          value={confirmarSenha}
                         onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            required
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