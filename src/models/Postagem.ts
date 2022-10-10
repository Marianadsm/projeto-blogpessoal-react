import Tema from './Tema'

interface Postagem{
id: number
titulo: string
texto: string
data: string
tema?: Tema | null /*pode ou não ter um tema essa postagem*/
}

export default Postagem