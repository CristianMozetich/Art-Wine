import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
      <NavBar />
      <CartWidget />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}

export default App
