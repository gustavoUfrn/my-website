import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 4rem;
    color: #F1ECE1;

    height: 100px;
    background-color: #3A353F;
`

export const ContactNav = styled.div`
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;

    div {
        margin: 0 1rem;
    }

`

export const ContactIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0;
`

export const FooterNav = styled.div`
    display: flex;
    flex-direction: column;
    border-left: 1px solid #F1ECE1; 

    a {
        padding: 0 1rem;
        font-size: 1rem;
    }
`