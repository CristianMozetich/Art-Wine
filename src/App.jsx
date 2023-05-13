import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ContainerArticle from './components/ContainerArticle/ContainerArticle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={ <ContainerArticle /> } />
        <Route path='/ItemListContainer' element={ <ItemListContainer/> } />
        <Route path='/ItemDetailContainer' element={ <ItemDetailContainer/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
