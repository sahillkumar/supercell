import React from 'react'
import { Link } from 'react-router-dom'
import './news.css'

function News({news}) {
     return (
          <div className="card news-card text-center">
               <div className="card-body">
                    <img src={news.img} className="news-image"/>
               </div>
        
          <p className="game-desc mt-4">NEWS</p>
          <Link to={`/home`} className="game-link">
          <h5>{news.name}</h5>
          </Link>
          </div>
     )
}

export default News
