import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
// import NoMatch from '../components/NoMatch'
import './App.css'
import Navbar from './components/Navbar';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
// import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Search from './pages/Search'

function App() {
  return (
      <>
<Navbar />
   <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Search />} />
            <Route path="*" element={<NoMatch/>}></Route>

    </Routes>  
  </>
  );
}

export default App
