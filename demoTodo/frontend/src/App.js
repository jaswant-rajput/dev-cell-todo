
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import AllNotes from './pages/AllNotes';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/allnotes" element={<AllNotes/>} />
      </Routes>
    </Router>
  )
}

export default App;
