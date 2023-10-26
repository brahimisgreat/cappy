import './App.css';
import Home from './components/pages/Home/home';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/pages/Cart/Cart';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
