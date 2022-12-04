
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer />}></Route>
      <Route path='/category/:categoryName' element={<ItemListContainer />}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
      <Route path="ItemList" element= {<ItemList/>} />
      <Route path='cart' element={<Cart></Cart>}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
