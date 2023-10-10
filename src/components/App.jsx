import '../css/App.css'
import '../css/tech_stack.css'
import '../css/project.css'
import Project  from './project'
import Experience  from './experience'
import Home from './home'
import NavBar from './Navbar/navBar'
import TechStack from './techStack'
import Footer from './footer'
import ContactForm from './form'

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
    <NavBar />
    <Home />
    <Experience />
    <TechStack />
    <Project />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
