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

/*get/getAll*/
export const busca = async(url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado (resposta.data)
}

export const buscaId = async(url:any, setDado: any, header: any) =>{
    const resposta = await api.get(url, header)
    setDado (resposta.data)
}

export const post = async (url:any, dados:any, setDado: any, header: any)=>{
    const resposta= await api.post(url, dados, header)
    setDado (resposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put (url, dados, header)
    setDado (resposta.data)
}

export const deleteId = async(url: any, header: any) =>{ //aqui n tem const resposta, pois aqui n vou armazenar nada
    await api.delete (url, header)
}