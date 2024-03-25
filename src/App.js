import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Products from "./components/AddToCart/Products";
import Cart from "./components/AddToCart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes path="/">
         <Route path="/" element={<Home />} />
        <Route path='Products' element={<Products />} />
        <Route path='Cart' element={<Cart />} />
    </Routes>
      <Footer />
    </>
  );
}

export default App;
