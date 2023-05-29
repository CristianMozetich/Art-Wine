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


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerArticle /> } />
        <Route path='/categoria/:idCategoria' element={
          <CartProvider>
            <ItemListContainer/> 
          </CartProvider>
          } />
        <Route path='/Item/:idItem' element={
            <CartProvider>
              <ItemDetailContainer />
            </CartProvider>
          } />
        <Route path='/formulario' element={<Form/>} />
        <Route path='/cart' element={
            <CartProvider>
              <Cart/>
            </CartProvider>
          } />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
