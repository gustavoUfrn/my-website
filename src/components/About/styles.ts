import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    padding: 4rem 0;
`

export const AboutContent = styled.div`
    display: flex;
    align-items: center;
    max-width: 1120px;
    gap: 3rem;
`

export const AboutText = styled.div`
    h1 {
        color: #C05850;
    }

    p {
        padding: 1rem 0;
        color: #505668;
        font-size: 1.3rem;
    }

    img {
        max-width: 50px;
    }
`

export const AboutIcons = styled.div`
    display: flex;
    gap: 1rem;
`