import Header from './component/header/Header'
import Cards from './component/Cards/Cards'
import Cart from './component/CartSection/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { useState } from 'react'
const App = () => {
    
  const [title, setTitle] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [creditRemaining, setCreditRemaining] = useState(0);

  // click handler function
  const handleSelect = (course) => {

    if(title.includes(course.title)){
      toast('⚠️ You already selected this course')
      return;
    }
    const newTitle = [...title, course.title]
    setTitle(newTitle)
    
    const newCreditHour = creditHour + course.credit;
    if(newCreditHour > 20){
      toast('⚠️ You can not take more then 20 credit hour')
      return;
    }
    const newCreditRemaining = 20 - newCreditHour;
    console.log(newCreditRemaining)
    setCreditRemaining(newCreditRemaining)
    setCreditHour(newCreditHour)
    }
    // click handler function ended here

      return (
        <>
    <Header></Header>
    <main className="flex md:mx-auto md:gap-1 justify-evenly">
      <Cards handleSelect ={handleSelect}></Cards>
      <Cart ourTitle={title} credit={creditHour} creditRemaining={creditRemaining}></Cart>
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
