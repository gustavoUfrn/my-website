import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import bgImg from "../src/assets/background-2.png"
import { Home } from "./components/Home"


export function App() {
  
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  )
}
