import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter'

function App() {

  return (
    <>
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting={"Benvenuto"}/>
      <Counter start={1} stock={10} />
    </>
  )
}

export default App
