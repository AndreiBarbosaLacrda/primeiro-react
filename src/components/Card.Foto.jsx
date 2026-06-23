function CardFoto ({imagem , titulo, descricao}) {
    return(
        <article className="card-foto">
            <img src={imagem} alt={titulo} />
            <div className="card-conteudo">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </article>
    )
}
export default CardFoto