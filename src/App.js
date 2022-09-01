import logo from './logo.svg';
import './App.css';
import Login from './screens/login/login';
import { Route, Routes } from 'react-router';
import Signup from './screens/signup/signup';
import Home from './screens/home/home';
import Menu from './screens/menu/menu';
import Summary from './screens/summary/summary';
import Checkout from './screens/checkout/checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
