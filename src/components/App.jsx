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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
    <a href='#top' className="toTopBtn"><button><FontAwesomeIcon icon={faArrowUp}> Top </FontAwesomeIcon></button></a>
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
