import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ContainerArticle from './components/ContainerArticle/ContainerArticle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form/Form'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CartWidget from './components/CartWidget/CartWidget'


function App() {
  return (
    <CartProvider>
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ContainerArticle /> } />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
            <Route path='/Item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/formulario' element={<Form/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    </CartProvider>
  );
}

export default App
