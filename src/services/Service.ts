import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoal-qexy.onrender.com/'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}


export const login = async (url: any, dados: any, setDado: any) => { /*url: url da API; dados: usuario, senha, setDado: recebe a resposta da minha API(objeto JSON recebendo os dados do usuario e o token); */
    const resposta = await api.post(url, dados) /*aciona o método POST, passando para ele os parâmetros url e dados da requisição (usuario e senha) ; await: aguarda o retorno da API para acionar o setDados*/
    setDado(resposta.data.token) /*aqui, ele recebe o usuario, senha e token.*/
}

