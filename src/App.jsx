import './css/App.css'
import './css/tech_stack.css'
import './css/project.css'
import Intro from './components/intro';
import TechStack from './components/techStack';
import Project  from './components/project'


function App() {
  // const [count, setCount] = useState(10)

  return (
    <>

    <Intro />
    <TechStack />
    <Project />
    </>
  )
}

export default App
