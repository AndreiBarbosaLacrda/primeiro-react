import Logo from "./Logo";
import Menu from "./Menu";

function Header({paginaAtiva, aoMudarPagina}) {
    return (
        <header className="header">
            <Logo />
            <Menu paginaAtiva={paginaAtiva} aoMudarPagina={aoMudarPagina} />    
        </header>
    )
}
export default Header   