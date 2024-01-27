import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import TopBanner from './components/top_banner'
import ContentFrame from './components/contentFrame'

function App() {

  return (
    <>
     <div>
        <Navbar/>
        <TopBanner/>
        <ContentFrame/>
     </div>
    </>
  )
}

export default App
