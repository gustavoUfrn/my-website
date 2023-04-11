import imgBg from "../../assets/background-2.png"
import homePhoto from "../../assets/home-photo.png"
import { HomeContainer, HomeBgImg, HomeBg, HomeInfo } from "./styles"

export function Home() {
    return (
        <>
            <div>
                <HomeBg>
                    <HomeBgImg src={imgBg} />
                </HomeBg>
                <HomeInfo>
                    <HomeContainer>
                        <img src={homePhoto}></img>
                            <h1>Hi, nice to meet you!</h1>
                            <p>I'm Gustavo Alessandro!</p>
                    </HomeContainer>
                </HomeInfo>
            </div>
        </>
    )
}