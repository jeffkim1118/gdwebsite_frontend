import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/account/login'
import Register from './components/account/register'
import { jwtDecode } from 'jwt-decode';
import SignOut from './components/account/signout'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/homepage'
import LoginPage from './components/account/loginPage'
import RegisterPage from './components/account/registerPage'
import ErrorPage from './components/errorPage'
import RecoverPage from './components/account/recoverPage'
import Footer from './components/footer'

function App() {
  const [currentUser, setCurrentUser] = useState()
  // This keeps the user loggedin after a successful login.
  useEffect(() => {
    const getUser = () => {
      const token = localStorage.getItem("token");
      if(!!token){
        let decodedToken = jwtDecode(token);
        fetch(`http://localhost:3000/users/${decodedToken['id']}`, {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            Authorization: `${token}`
          },
        })
        .then((res) => res.json())
        .then(data => setCurrentUser(data))
        .catch((error) => console.log(error))
      }
    }
    getUser();
  },[])

  return (
    <>
     <div>
        <Navbar/>
        {/* <Footer/> */}
        
        <Routes>
          <Route path='*' element={<ErrorPage/>}></Route>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/register' element={<RegisterPage/>}></Route>
          <Route path='/recover' element={<RecoverPage/>}></Route>
        </Routes>
     </div>
    </>
  )
}

export default App
