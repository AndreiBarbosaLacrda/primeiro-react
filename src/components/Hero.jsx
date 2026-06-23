import Botao from "./Botao.jsx";

function Hero() {
    return (
        <section claasName="hero" >
                <div className="hero-conteudo" >
            <span className="etiqueta" >Projeto guiado em React</span>
            <h1> Contrua seu primeiro site com componentes    </h1>
            <p>
                Aprenda a montar uma interface com Header, Menu, Hero, Galeria,
                páginas e Footer usando React, JavaScript e CSS.
            </p>
            <Botao texto="Começar agora" />
            </div>

            <div>
            <strong>Componentes do site</strong>
            <span>Header</span>
            <span>Hero</span>
            <span>Galeria</span>
            <span>Footer</span>
            </div>
        </section>
    )
}
            
            export default Hero