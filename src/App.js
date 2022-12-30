import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Food from './components/Food';
import Dinner from './components/Food/Dinner';
import Lunch from './components/Food/Lunch';
import Breakfast from './components/Food/Breakfast';
import Snack from './components/Food/Snack';
import Menu from './components/Menu';
import Answer from './components/Answer';
import Coin from './components/Coin';
import About from './components/About';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/food" element={<Food />}/>
      <Route path="/dinner" element={<Dinner />}/>
      <Route path="/lunch" element={<Lunch />}/>
      <Route path="/breakfast" element={<Breakfast />}/>
      <Route path="/snack" element={<Snack />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/answer" element={<Answer />}/>
      <Route path="/coin" element={<Coin />}/>
      <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
