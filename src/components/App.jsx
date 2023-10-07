import '../css/App.css'
import '../css/tech_stack.css'
import '../css/project.css'
import Project  from './project'
import Home from './home'
import NavBar from './Navbar/navBar'


function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
    <NavBar />
    <Home />
    <Project />
    </>
  )
}

export default App
