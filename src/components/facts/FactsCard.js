import React from 'react'
import './styles.css'

const FactsCard = ({ fact }) => {
    return (
        <div className='factcard'>{fact}</div>
    )
}

export default FactsCard