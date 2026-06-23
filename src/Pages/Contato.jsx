import Container from '../components/Container.jsx'
import SecaoTexto from '../components/SecaoTexto.jsx'
import Botao from '../components/Botao.jsx'

function Contato() {
  return (
    <Container>
      <SecaoTexto
        titulo="Contato"
        texto="Esta página simula uma área de contato. Em uma próxima evolução, ela poderá receber
um formulário com campos e validação."
      />
      <Botao texto="Enviar mensagem" />
    </Container>
  )
}

export default Contato
