import React, { useState, useEffect, ChangeEvent } from 'react';
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(  /*useLogin:para acessar a informação ; setUserLogin: para alterar a informação. os valores abaixo são os iniciais do state. quando é inicializado pela primeira vez */
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {/* HTMLInputElement manipula valores de campos de texto HTML ; e: evento*/

        setUserLogin({
            ...userLogin, /*... são os atributos do userLogin*/
            [e.target.name]: e.target.value /*do lado esquerdo, ele captura a propriedade (name dos textfields abaixo); do lado direito, ele captura o VALOR*/
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token]) /*aqui eu passo o token como parâmetro pro useEffect*/


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) { /*aqui ele observa o comportamento do formulario como um todo e faz o envio das infos por meio do SUBMIT*/
        e.preventDefault(); /*previne que o botão atualize a tela(que seria um comportamento padrao dele)*/
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        } catch (error) {
            toast.error('Dados inconsistentes! Erro ao logar', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            })
        }
    }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
                <Box paddingX={20} alignItems="center" >
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom /*margem inferior*/ color="textPrimary" component="h3" align="center" className="bold" >Entrar</Typography>

                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="usuário"
                            variant="outlined"
                            name="usuario"
                            margin="normal"
                            fullWidth />

                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant="outlined"
                            name="senha"
                            margin="normal"
                            type="password"
                            fullWidth />

                        <Box marginTop={2} textAlign="center"  >

                            <Button type="submit" variant="contained" color="primary"   >
                                Logar
                            </Button>

                        </Box>
                    </form>
                </Box>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Box marginRight={1}>
                        <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastro'>
                        <Typography variant="subtitle1" gutterBottom align="center" className='bold'>Cadastre-se</Typography>
                    </Link>

                </Box>
            </Grid>
            <Grid xs={12} md={6} className="imagem">

            </Grid>

        </Grid>
    );
}

export default Login;