import React from 'react'
import './Column.scss'
import Card from '../Card/Card'
import { mapOrder } from '../../utilities/sort'


function Column({column}) {
  const cards = mapOrder(column.cards, column.cardOrder, "id")
  return (
    <>
        <div className="column">
          <header className="header">{column.title}</header>
          <ul className='card-list'>
            {cards && cards.length > 0 && cards.map((card, index)=>{
              return(
                <Card key={card.id} card={card}/>
              )
            })}
          </ul>
          <footer className="footer">Add a New Card</footer>
        </div>
    </>
  )
}

export default Column