import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #F1ECE1;

    div p {
        font-size: 2rem;
        padding: 1rem 0;
    }
`

export const HomeBgImg = styled.img`
    width: 100%;
    height: auto;
`

export const HomeBg = styled.div`
    position: relative;
`

export const HomeInfo = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 140px;
    bottom: 0;
    margin: auto;
`


