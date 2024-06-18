import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';

function App() {
  return (
    <div className="App">
      {/* <NavBar report='none'/> */}
      <NavBar report={false}/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
