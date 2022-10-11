import React, { ChangeEvent, useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import { Box } from '@mui/material'
import { buscaId, post, put, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>()


  useEffect(() => {
    if (token == '') {
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
    navigate('/login')
    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/tema/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/temas')
    deleteId(`/tema/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Tema deletado com sucesso!', {
      position: "top-right",
      autoClose: 2000,//2seg
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false, 
      draggable: false, 
      theme: "colored",
      progress: undefined
  })   
       }
  function nao() {
    navigate('/temas')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema?
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;