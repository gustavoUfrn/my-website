import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;

    height: 80px;
    background-color: #3A353F;
    color: #F1ECE1;
    padding: 0 6rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    nav {
        display: flex;
        gap: 0.8rem;
    }

    a {
        text-decoration: none;
        color: #F1ECE1;
    }
`

export const NavLogo = styled.a`
    text-decoration: none;
    color: #F1ECE1;
    font-weight: 700;
`