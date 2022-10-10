import React , {useState , useEffect} from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material'
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem'
import useLocalStorage from 'react-use-localstorage';
import {busca} from '../../../services/Service'


function ListaPostagem() {

  let navigate = useNavigate();

  const [postagens, setPostagens] = useState<Postagem[]>([])

  const [token, setToken] = useLocalStorage('token');

useEffect (() => {
  if (token==='') {
    alert('Faça o Login para continuar!')
    navigate('/login')
  }
}, [token])

async function getPostagens(){
  await busca('/postagens', setPostagens, {
    headers: { 'Authorization': token}
  })
}

useEffect(() => {
  getPostagens()
},[postagens.length])

  return (
    <>
    {postagens.map(postagens => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              Título
            </Typography>
            <Typography variant="body2" component="p">
              Texto da Postagem
            </Typography>
            <Typography variant="body2" component="p">
              Tema
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to="" className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to="" className="text-decorator-none">
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
export default ListaPostagem;