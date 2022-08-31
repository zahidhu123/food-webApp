import logo from './logo.svg';
import './App.css';
import Login from './screens/login/login';
import { Route, Routes } from 'react-router';
import Signup from './screens/signup/signup';
import Home from './screens/home/home';
import Menu from './screens/menu/menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
