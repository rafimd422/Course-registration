import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { useState } from 'react'
const App = () => {
    
  const [title, setTitle] = useState([]);
  const [disabled, setDisabled] = useState(false);

  
  const handleSelect = (course) => {

    if(title.includes(course.title)){
      toast('⚠️ You already selected this course')
      return;
     
    }
    const newTitle = [...title, course.title]
    setTitle(newTitle)
  }
      return (
        <>
    <Header></Header>
    <main className="flex md:mx-auto md:gap-1 justify-evenly">
      <Cards handleSelect ={handleSelect} disabled={disabled}></Cards>
      <Cart ourTitle={title}></Cart>
    </main>
    <ToastContainer
    position="bottom-center"
    autoClose={4000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"/>
        </>
      )
      
    }

export default App
