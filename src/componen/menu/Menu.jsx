import React from 'react'
import './menu.css'

const MenuCategory = ({
    src,
    alt,
    Text,
}) => {
    return (
        <div className='menu-card'>
            <img src={src} alt={alt} className='menu-card-img' />
            <h3>{Text}</h3>
        </div>
    )
}

export default MenuCategory