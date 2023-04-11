import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Footer } from "./components/Footer"


export function App() {
  
  return (
    <>
      <Header />
      <Home />
      <About />
      <Footer />
      <GlobalStyle />
    </>
  )
}
