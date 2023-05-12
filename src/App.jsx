import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ContainerArticle from './components/ContainerArticle/ContainerArticle'


function App() {

  return (
    <>
      <NavBar />
      <ContainerArticle />
      <ItemListContainer/>
      <CartWidget />
      <ItemDetailContainer/>
    </>
  )
}

export default App
