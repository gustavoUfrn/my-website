import { HeaderContainer } from "./styles";

export function Header() {
    const logo = "<Gustavo />"
    return (
        <>
            <HeaderContainer>
                <a href="#">{logo}</a>

                <nav>
                    <a>Home</a>
                    <a>Sobre</a>
                    <a>Projetos</a>
                    <a>Contato</a>
                </nav>
            </HeaderContainer>
        </>
    )
}