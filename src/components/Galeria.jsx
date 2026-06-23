import CardFoto from './CardFoto.jsx'

function Galeria() {
  // Cada objeto do array representa um card que aparecerá na tela.
  const fotos = [
    {
      imagem: '/imagens/foto1.jpg',
      titulo: 'Interface moderna',
      descricao: 'Layout inicial com destaque visual e navegação clara.',
    },
    {
      imagem: '/imagens/foto2.jpg',
      titulo: 'Componentes reutilizáveis',
      descricao: 'Peças pequenas que podem ser combinadas em páginas.',
    },
    {
      imagem: '/imagens/foto3.jpg',
      titulo: 'Galeria responsiva',
      descricao: 'Cards organizados para apresentar imagens e informações.',
    },
  ]

  return (
    <section className="galeria">
      <div className="titulo-secao">
        <span>Galeria</span>
        <h2>Resultado visual da Home</h2>
      </div>
      <div className="grade-fotos">
 {fotos.map((foto) => (
    
 <CardFoto
 key={foto.titulo}
imagem={foto.imagem}
titulo={foto.titulo}
 descricao={foto.descricao}
 />
 ))}
 </div>
 </section>
 )
 }
 export default Galeria
