
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
// import ItemList from './components/ItemList/ItemList';
import CartProvider from './context/CartProvider';

function App() {
  return (
  <CartProvider>
    <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
       <Route path="/" element={<ItemListContainer />} />
       <Route path="/category/:categoryName" element={<ItemListContainer />} />
       <Route path="/item/:id" element={<ItemDetailContainer />} />
       <Route path="/category/:category/item/:id" element={<ItemDetailContainer />} />
       {/* <Route path="ItemList" element= {<ItemList/>} /> */}
       <Route path="cart" element={<Cart />} />

     </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
