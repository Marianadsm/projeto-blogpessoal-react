import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/estaticos/footer/Footer';
import Navbar from './components/estaticos/navbar/Navbar';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTemas from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';

function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        <div style={{minHeight: '80vh'}}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />

            <Route path="/home" element={<Home />} />

            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastroTema" element={<CadastroTema />} />
            <Route path="/atualizarTema/:id" element={<CadastroTema />} />
            <Route path="/apagarTema/:id" element={<DeletarTema />} />

            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/editarPost/:id" element={<CadastroPost />} />
            <Route path="/apagarPost/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        
        <Footer />
      
    </BrowserRouter>
  );
}

export default App;