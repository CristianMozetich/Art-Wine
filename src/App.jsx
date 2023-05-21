import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ContainerArticle from './components/ContainerArticle/ContainerArticle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form/Form'


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerArticle /> } />
        <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> } />
        <Route path='/Item/:idItem' element={ <ItemDetailContainer/> } />
        <Route path='/formulario' element={<Form/>} />
        <Route path='*' element={<h2>Sitio en constricción</h2>} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
