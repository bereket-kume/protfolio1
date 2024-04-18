import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./pages/home"
import Project from "./pages/project"
import Exp from "./pages/experience"
import NavBar from "./component/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/footer"
import './app.css'
import ProjectDisplay from "./pages/projects"

function App() {

  return (
    <>
     <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/experience" element={<Exp />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
        </Routes>
        <Footer  />
     </Router>
    </>
  )
}

export default App
