import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import './App.css'

function App() {

  return (
    <>
<Header></Header>
<div className="flex">
  <Cards></Cards>
  <Cart></Cart>
</div>
    </>
  )
}

export default App
