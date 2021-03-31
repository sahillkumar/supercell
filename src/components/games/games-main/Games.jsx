import React, { useContext } from 'react'
import { DataContext } from '../../../context'
import GameCard from '../game-card/GameCard'
import './games.css'


function Games() {
     const data = useContext(DataContext);
     const games = data?data.games:null;
     console.log(games);
     return (
          <div className="container-fluid">
               <div className="games-bg">
                    <img src="./images/games.jpg" className="games-img"/>
               </div>
               <div className="game-img-text">
                    <h3 className="games mb-3">GAMES</h3>
                    <p>Farm, Clash, Boom, Battle, Brawl!</p>
               </div>
               <div className="games-grid">
               {
                    games && games.map((game,index)=>(
                         <GameCard game={game} key={index}/>
                    ))
               }
               </div>
          </div>
     )
}

export default Games
