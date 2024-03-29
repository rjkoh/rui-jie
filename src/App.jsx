import styled from "styled-components"
import { Contact } from "./components/Contact"
import { Hero } from "./components/Hero"
import { Languages } from "./components/Languages"
import { NavBar } from "./components/NavBar"
import { Who } from "./components/Who"
import { Works } from "./components/Works"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`

function App() {

  return (
    <Container>
      <NavBar/>

      <Hero/>

      <Who/>

      <Languages/>

      <Works/>

      <Contact/>

    </Container>
  )
}

export default App
