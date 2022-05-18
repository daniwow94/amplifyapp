import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Results from './pages/Results';
import About from './pages/About';
import SecurityCheck from './pages/SecurityCheck';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavLink className="navbar" exact activClassName="active" to="/">Start Security Check</NavLink>
          <NavLink className="navbar" activClassName="active" to="/results">Results</NavLink>
          <NavLink className="navbar" activClassName="active" to="/about">About</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<SecurityCheck />}></Route>
          <Route path="/results" element={<Results />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;