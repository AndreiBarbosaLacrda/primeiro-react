import Container from "../components/Container";
import Hero from "../components/Hero";
import SecaoTexto from "../components/SeçãoTexto";
import Galeria from "../components/Galeria";

function  Home() {
return(
<Container>
<Hero/>
<SecaoTexto
titulo="Aprensizado por Construção"
 texto="Nesta página, os componentes são combinados para formar uma tela completa. A Home usa Hero , 
 seção de texto e galeria para demonstrar composição em React."
/>
<Galeria/>


</Container>
)
}
export default Home