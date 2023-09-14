import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import './App.css'

function App() {

  return (
    <>
<Header></Header>
<main className="flex lg:container mx-auto">
  <Cards></Cards>
  <Cart></Cart>
</main>
    </>
  )
}

export default App
