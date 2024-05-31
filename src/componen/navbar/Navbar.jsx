
import {React,useState} from 'react'
import { MenuNav } from './MenuNav'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../button/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className='NavbarItem'>
      <h1 className='nav-logo'>Pojok <span>Bambu</span></h1>
      <div className='menu-icon' onClick={handleClick}>     
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>
      <div >  
        <ul className={clicked? 'nav-menu active': 'nav-menu'}>
          {MenuNav.map((item,index)=>{
            return(
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}  
                </a>
              </li>
            )
          })}
          <Button className='nav-button'>
            <Link className="nav-button"to={"/login"}>Login</Link>
          </Button>
        </ul>
      </div>
    </header>
  )
}

export default Navbar