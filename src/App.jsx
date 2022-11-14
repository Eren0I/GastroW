import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar1 from './components/Navbar/Navbar1'
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import Announcement from './pages/announcement/announcement'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function App() {


  return (
  <>
    <BrowserRouter>
    <ToastContainer/>
      <Navbar1/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  )
}

export default App
