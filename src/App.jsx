import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import './App.css'
const App = () => {
    
  const [title, setTitle] = useState([]);
    
    

  const handleSelect = (course) => {
    console.log(course.title)
    const newTitle = [...title, course.title]
    setTitle(newTitle)
  }
      return (
        <>
    <Header></Header>
    <main className="flex md:mx-auto md:gap-1 justify-evenly">
      <Cards handleSelect ={handleSelect}></Cards>
      <Cart></Cart>
    </main>
        </>
      )
      
    }

export default App
