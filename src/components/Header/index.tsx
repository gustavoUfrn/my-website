import { HeaderContainer } from "./styles";

export function Header() {
    const logo = "<Gustavo />"
    return (
        <>
            <HeaderContainer>
                <a href="#">{logo}</a>

                <nav>
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Projetos</p>
                    <p>Contato</p>
                </nav>
            </HeaderContainer>
        </>
    )
}