import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    z-index: 10;

    height: 80px;
    background-color: #3A353F;
    color: #F1ECE1;
    padding: 0 5rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    nav {
        display: flex;
        gap: 0.8rem;
    }
`

export const NavLogo = styled.a`
    font-weight: 700;
`