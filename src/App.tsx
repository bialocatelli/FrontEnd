import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Footer from './components/estaticos/footer/Footer';
import SobreNos from './paginas/sobreNos/SobreNos';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import CadastrarProduto from './components/produtos/cadastrarProduto/CadastrarProduto';
import ListarProduto from './components/produtos/listarProduto/ListarProduto';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import 'react-toastify/dist/ReactToastify.css'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />

      <Router>
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path='/cadastro' element={<CadastroUsuario />} />

            <Route path='/sobrenos' element={<SobreNos />} />

            <Route path="/categorias" element={<ListaCategoria />} />

            <Route path="/produtos" element={<ListarProduto />} />

            <Route path="/formularioCategoria" element={<CadastroCategoria />} />

            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />

            <Route path="/formularioProduto" element={<CadastrarProduto />} />

            <Route path="/formularioProduto/:id" element={<CadastrarProduto />} />

            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />

      </Router>
    </Provider>

  );
}

export default App;
