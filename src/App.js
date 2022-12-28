import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Food from './components/Food';
import Dinner from './components/Food/Dinner';
import Menu from './components/Menu';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/food" element={<Food />}/>
      <Route path="/dinner" element={<Dinner />}/>
      <Route path="/menu" element={<Menu />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
