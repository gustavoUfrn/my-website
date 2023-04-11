import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F1ECE1;
    gap: 1.2rem 0;

    p {
        font-size: 1.6rem;
        border-bottom: 1px solid #F1ECE1;
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


