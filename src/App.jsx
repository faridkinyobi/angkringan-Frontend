
import Home from './page/home/Home'
import Profil from './page/profil/Profil'
import Produk from './page/produk/Produk'
import Kontak from './page/contact/Kontak'
import Login from './page/login/login'
import Registrasi from './page/register/register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './componen/navbar/Navbar'
import Footer from './componen/footer/Footer'
import Mybarshow from './MybarShow/mybarshow'
import DasbordProduct from './page/admin/DasbordProduct/dasbord'
import DashboardSaran from './page/admin/dasbordSaran/DasboarSaran'
import User from './page/admin/DasboardUser/DasUser'
import { useState, useEffect } from 'react'

const App = () => {
  const[username,SetUsername] = useState(localStorage.getItem('username') || "")
  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);
  
  return (
    <>
    <Router>
      <Mybarshow>
        <Navbar/>
      </Mybarshow>
      
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/profil'element={<Profil/>}/>
        <Route path='/produk'element={<Produk/>}/>
        <Route path='/kontak'element={<Kontak/>}/>
        <Route path='/login'element={<Login  SetUsername={SetUsername}/>}/>
        <Route path='/registrasi'element={<Registrasi/>}/>
        <Route path='/dashboardProdct'element={<DasbordProduct/>}/>
        <Route path='/user'element={<User username={username}/>}/>
        <Route path='/saran'element={<DashboardSaran/>}/>
      </Routes>
      
      <Mybarshow>
        <Footer/>
      </Mybarshow>
      
    </Router>
    </>
  
  )
}

export default App