import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Food from './pages/Food';
import Dinner from './pages/Food/Dinner';
import Lunch from './pages/Food/Lunch';
import Breakfast from './pages/Food/Breakfast';
import Snack from './pages/Food/Snack';
import Menu from './pages/Menu';
import Answer from './pages/Answer';
import Coin from './pages/Coin';
import About from './pages/About';
import './pages/Task/TaskPage.tsx';
import { TaskPage } from './pages/Task/TaskPage.tsx';

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
      <Route path="/task" element={<TaskPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
