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
                        <div>
                            <img src={homePhoto}></img>
                        </div>
                        <div>
                            <p>Hi, my name is gustavo alessandro!</p>
                        </div>
                    </HomeContainer>
                </HomeInfo>
            </div>
        </>
    )
}