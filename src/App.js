import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart';

function App() {
  return (
      <BrowserRouter>
        <CartProvider >
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/brand/:brand' element={<ItemListContainer />} />
            <Route path='item/:idItem' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
