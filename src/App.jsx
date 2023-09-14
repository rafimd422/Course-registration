import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import './App.css'
import { useState } from 'react'
const App = () => {
    
  const [title, setTitle] = useState([]);
  const [disabled, setDisabled] = useState(false);

  
  const handleSelect = (course) => {
    const courseTitle = course.title;
    const newTitle = [...title, courseTitle]

    if(title === courseTitle){
      alert('you already selected this course')
      return;
    }
    setTitle(newTitle)
    setDisabled(true)
  }
      return (
        <>
    <Header></Header>
    <main className="flex md:mx-auto md:gap-1 justify-evenly">
      <Cards handleSelect ={handleSelect} disabled={disabled}></Cards>
      <Cart ourTitle={title}></Cart>
    </main>
        </>
      )
      
    }

export default App
