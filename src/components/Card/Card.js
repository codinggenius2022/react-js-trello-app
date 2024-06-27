import React from 'react'
import './Card.scss'

function Card({card}) {
  return (
    <>
        <li className='card-item'>
              {card.image && 
                <img src={card.image} alt='card img'/>
              }
              {card.title && card.title}
        </li>
    </>
  )
}

export default Card