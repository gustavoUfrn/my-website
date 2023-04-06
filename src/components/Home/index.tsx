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
                        <p>Hi, my name is gustavo Alessandro!</p>
                    </HomeContainer>
                </HomeInfo>
            </div>
        </>
    )
}