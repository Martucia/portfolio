import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Contacts from "./components/contacts/Contacts"
import Experience from "./components/experience/Experience"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import ScrollToHashElement from "./components/scroll/ScrollToHashElement"
import Skills from "./components/skills/Skills"

function App() {

  return (
    <>
      <ScrollToHashElement />
      <Header />
      <Banner />
      <About />
      <Skills />
       <Experience />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
