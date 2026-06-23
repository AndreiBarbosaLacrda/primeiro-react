 function Menu({paginaAtiva, aoMudarPagina}) {
    const paginas = ['Home', 'Empresa' , 'Produtos', 'Contato']
    return (
        <nav className="menu" aria-label="Menu principal" >
                 {paginas.map((pagina) => (
            <button              
                 key={pagina}
                className={paginaAtiva === pagina ? 'menu-link ativo' : 'menu-link'}
                onClick={() => aoMudarPagina(pagina)}
                >
                {pagina}
            </button>
        ))}
        </nav>
    )
}

export default Menu