import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';


function ListaTemas() {
  //trazer a função de navegação interna
  let navigate = useNavigate();

  // estado para gerenciar os temas que virão do backend
  const [temas, setTemas] = useState<Tema[]>([]) //([]) é como eu vou inicia-lo

  // trazer o token do navegador para dentro do blog
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
);

  //verificar se a pessoa tem token. se não tiver, mandar para a pag de login
  useEffect(() => {
    if (token === '') {
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

  //função que realmente vai até o backend para buscar os temas (faz a requisição dos temas)
  async function getTemas() {
    await busca('/temas', setTemas, {
      headers: { 'Authorization': token }
    })
  }

  //função (criada acima) para disparar a busca de temas assim que a tela for carregada
  useEffect(() => {
    getTemas()
  }, [temas.length]) // length: sempre que a variável tema sofrer uma modificação: aciona o "getTemas"

  return (
    <>
      {/* mapeamento do array de temas, para recriar a estrutura inteira para cada tema existente */}
      {temas.map(tema => (
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                Tema {tema.id} - {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5} >

                <Link to={`/formularioTema/${tema.id}`}  className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small' color="primary" >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small' color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  )
}

export default ListaTemas