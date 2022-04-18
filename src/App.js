import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Facts from './components/facts/Facts'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/facts/:animeName' element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;
