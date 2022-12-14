import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';
import {Box} from '@mui/material'
import { toast } from 'react-toastify';

function CadastroUsuario() {
    
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
    const [user, setUser] = useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            senha:'',
            foto: ''
           })

    const [userResult, setUserResult] = useState<User>(
        {
            id:0,
            nome: '',
            usuario: '',
            senha:'',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
        }
    }, [userResult])

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updatedModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function confirmar(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        if(confirmarSenha === user.senha) {
            cadastroUsuario(`usuarios/cadastrar`, user, setUserResult)
            toast.success('Usuário cadastrado com sucesso!', {
                position: "top-right",
                autoClose: 2000,//2seg
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false, 
                draggable: false, 
                theme: "colored",
                progress: undefined
            })             
            navigate('/login')
        } else {
            toast.error('Dados inconsistentes! Por favor, verifique as informações de cadastro', {
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
        <Grid container className="container"  >
                <Grid item xs={6} className='imagem2'></Grid>
                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={10}>
                        <form onSubmit={confirmar}>
                            <Typography variant='h3' gutterBottom component='h3' className='textos2'>Cadastrar</Typography>

                            <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='nome' label='Nome*' variant='outlined' name='nome' margin='normal' fullWidth />

                            <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='usuario' label='Usuário (e-mail)*' variant='outlined' name='usuario' margin='normal' fullWidth />

                            <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='senha' label='Senha*' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                            <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='Confirmar senha*' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                            <TextField value={user.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updatedModel(event)} id='foto' label='Foto (url)*' variant='outlined' name='foto' margin='normal' fullWidth />

                            <Box marginTop={2} textAlign='center'>
                                <Link to='/login' className='text-decorator-none'>
                                    <Button variant='contained' className='btnCancelar'>
                                        Cancelar
                                    </Button>
                                </Link>
                                    <Button type='submit' variant='contained' className='cadastrar' >
                                        Cadastrar
                                    </Button>
                            </Box>
                        </form>
                    </Box>
                </Grid>
        </Grid>
    )
}

export default CadastroUsuario;