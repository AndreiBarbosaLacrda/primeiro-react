import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './Pages/Home.jsx'
import Empresa from './Pages/Empresa.jsx'
import Produtos from './Pages/Produtos.jsx'
import Contato from './Pages/Contato.jsx'
import './App.css'

function App() {

  const [paginaAtiva, setPaginaAtiva] = useState('Home')


  function renderizarPagina() {
    if (paginaAtiva === 'Empresa') return <Empresa />
    if (paginaAtiva === 'Produtos') return <Produtos />
    if (paginaAtiva === 'Contato') return <Contato />

    return <Home />
  }

  return (
    <>
      <Header paginaAtiva={paginaAtiva} aoMudarPagina={setPaginaAtiva} />
      <main className="conteudo-principal">
        {renderizarPagina()}
      </main>
      <Footer />
    </>
  )
 }

export default App