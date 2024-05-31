import {React,useState} from 'react'
import { MenuAdmin} from './navAdminMEnu'
import '../../../componen/navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../../componen/button/Button'
import { useNavigate } from 'react-router-dom'
import { config } from '../../../config'
const NavbarAdmin = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
    setClicked(!clicked);
    };
    const navigate= useNavigate()

    const logout = async() => {
        // const logout = await axios.post(`${config.api_host_dev}/logout`)
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accestoken')
        // localStorage.removeItem('selectedItems')
        localStorage.removeItem('username')
        navigate("/login") 
    }
    return (
    <nav className='NavbarItem'>
        <h1 className='nav-logo'>Pojok <span>Bambu</span></h1>
        <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
            </div>
            <div >
                <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                    {MenuAdmin.map((item,index)=>{
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                <Button className='nav-button' onClick={logout}>
                    log out
                    </Button>
                </ul>
            </div>
    </nav>
    )
}

export default NavbarAdmin