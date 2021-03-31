import React from 'react'
import { Link } from 'react-router-dom'
import './gamecard.css'

function GameCard({game}) {
     return (
          <div className="card game-card text-center ">
          <Link to={`games/${game.link}`} className="game-link">
               <div className="card-body">
                    <img src={game.image} className="gamecard-image"/>
               </div>
          </Link>
          <p className="game-desc mt-4">{game.desc}</p>
          <Link to={`games/${game.link}`} className="game-link">
          <h5>{game.name}</h5>
          </Link>
          </div>
          
     )
}

export default GameCard
