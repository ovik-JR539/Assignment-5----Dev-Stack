import { ToastContainer } from 'react-toastify'
import './App.css'


import Footer from './component/Footer'
import Herocotain from './component/herocotain'
import Navbar from './component/Navbar'
import ProductCard from './component/productCard'


function App() {
  return (
    <>

    <Navbar></Navbar>
    <Herocotain></Herocotain>
   <ProductCard></ProductCard>
   <ToastContainer ></ToastContainer>

    <Footer></Footer>

  
    </>
  )
}

export default App