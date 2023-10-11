import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home.jsx';
import FAQ from './components/FAQ.jsx';
import About from './components/About';
import MapChart from "./components/MapChart";
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';

function App() {
  return (

  <Router>
      <NavBar>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/FAQ" component={FAQ} />

      </Routes>
      </NavBar>
    </Router>




  );
}

export default App;
