import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import Tema from '../../../models/Tema';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [temas, setTemas] = useState<Tema[]>([]);

    const [token, setToken] = useLocalStorage('token');

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: '',
    });

    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
    });

    useEffect(() => {
        if (token === '') {
            alert('Por favor, faça o login para continuar.');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        });
    }, [tema]);

    async function findByIdPostagem(id: string) {
        await buscaId(`posts/${id}`, setPostagem, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        getTemas();
        if (id !== undefined) {
            findByIdPostagem(id);
        }
    }, [id]);

    async function getTemas() {
        await busca('/tema', setTemas, {
            headers: {
                Authorization: token,
            },
        });
    }

    function updatedPostagem(event: ChangeEvent<HTMLInputElement>) {
        setPostagem({
            ...postagem,
            [event.target.name]: event.target.value,
            tema: tema,
        });
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await put(`/posts`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Postagem atualizada com sucesso');
            } catch (error) {
                alert('Erro ao atualizar, verifique os campos');
            }
        } else {
            try {
                await post(`/posts`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });
                alert('Postagem cadastrada com sucesso');
            } catch (error) {
                alert('Erro ao cadastrar, verifique os campos');
            }
        }
        navigate('/posts');
    }

    return (
        <>
            <Container>
                <form onSubmit={onSubmit}>
                    <Typography
                        variant="h3"
                        color="textSecondary"
                        component="h1"
                        align="center"
                    >
                        Formulário de cadastro postagem
                    </Typography>

                    <TextField
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                        id="titulo"
                        label="titulo"
                        variant="outlined"
                        name="titulo"
                        margin="normal"
                        fullWidth
                    />

                    <TextField
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                        id="texto"
                        label="texto"
                        name="texto"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                    />

                    <FormControl fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>

                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) =>
                                buscaId(`/tema/${e.target.value}`, setTema, {
                                    headers: {
                                        Authorization: token,
                                    },
                                })
                            }
                        >
                            {temas.map((tema) => (
                                <MenuItem value={tema.id} style={{ display: 'block' }}>
                                    {tema.descricao}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={tema.id === 0}
                        >
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </>
    );
}

export default CadastroPost;