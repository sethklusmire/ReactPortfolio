import About from "./Components/About/about"
import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/navbar"
import Projects from "./Components/Projects/Projects"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
          <div className='app'>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />

          </div>
      </Router>
  );
}

export default App;
