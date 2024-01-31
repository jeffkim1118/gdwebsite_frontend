import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import TopBanner from './components/top_banner'
import ContentFrame from './components/contentFrame'
import Login from './components/login'
import Register from './components/register'

function App() {

  return (
    <>
     <div>
        <Navbar/>
        <TopBanner/>
        <ContentFrame/>
        <Register/>
     </div>
    </>
  )
}

export default App
