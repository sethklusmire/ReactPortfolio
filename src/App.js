import Home from "./Components/Home/Home"
import NavBar from "./Components/NavBar/navbar"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/contact"
import Footer from "./Components/Footer/footer"
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
    <Router>
          <div className='app'>
            <Route path='/' component={NavBar} />
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/' component={Footer} />

          </div>
      </Router>
  );
}

export default App;
