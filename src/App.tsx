import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import bgImg from "../src/assets/background-2.png"


export function App() {
  
  return (
    <>
      <Header />
      <div>
        <img src={bgImg} />
      </div>
      <GlobalStyle />
    </>
  )
}
