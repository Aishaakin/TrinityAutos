import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
// import NoMatch from '../components/NoMatch'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Blog from './pages/Blog';
import { Suspense } from 'react';
import './assets/Icons/icons';

function App() {
  return (
      <>
<Suspense fallback={<div className="container">Loading...</div>}>
<Navbar /> 
 <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Search />} />
            {/* <Route path="*" element={<NoMatch/>}></Route> */}

    </Routes> 
<Footer />    
</Suspense>
   
  </>
  );
}

export default App
