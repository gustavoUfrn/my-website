import { HeaderContainer, NavLogo } from "./styles";

export function Header() {

    const logo = "<Gustavo />"

    return (
        <>
            <HeaderContainer>
                <NavLogo href="#">{logo}</NavLogo>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Projetos</a>
                    <a href="#">Contato</a>
                </nav>
            </HeaderContainer>
        </>
    )
}