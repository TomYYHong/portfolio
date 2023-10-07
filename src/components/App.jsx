import '../css/App.css'
import '../css/tech_stack.css'
import '../css/project.css'
import Intro from './intro';
import TechStack from './techStack';
import Project  from './project'


function App() {
  // const [count, setCount] = useState(10)

  return (
    <>
    {/* <Navbar /> */}
    <Intro />
    <TechStack />
    <Project />
    </>
  )
}

export default App
