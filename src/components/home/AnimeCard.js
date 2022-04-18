import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'


const AnimeCard = ({ name, imgUrl }) => {
    return (
        <NavLink className='card' to={`/facts/${name}`}>
            <img src={imgUrl} alt={name} className='cardImg' />
            <p className='cardTitle'>{name}</p>
        </NavLink>
    )
}

export default AnimeCard