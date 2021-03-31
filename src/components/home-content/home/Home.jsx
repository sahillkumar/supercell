import React, { useContext } from 'react'
import { DataContext } from '../../../context';
import News from '../news/News';
import './home.css'

function Home() {
     const data = useContext(DataContext);
     const news = data?data.news:null;
     
     return (
          <div className="container-fluid">
               <div className="main-bg">
                    <img src="./images/bg_hero_frontpage.jpg" className="main-img"/>
               </div>
               <div className="game-img-text">
                    <h3 className="games mb-4">SUPERCELL</h3>
                    <p>Makers of Hay Day, Clash of Clans, Boom Beach,<br/>Clash Royale and Brawl Stars.</p>
               </div>
               <div className="seelatest d-flex mb-5">
                    <button className="btn btn-primary center see-latest-btn" >
                         SEE LATEST
                    </button>
               </div>
               <div className="news-grid">
                    {
                         news && news.map((news,index)=>{
                              return(
                                   <News key={index} news={news}/>
                              )
                         })
                    }
               </div>
               <div className="archive d-flex mb-5">
                         <button className="btn btn-primary center archive-btn" >
                              NEWS ARCHIVE
                         </button>
                    </div>
               <div className="uptodate">
                    <img src="/images/home-games.png" className="upto-img"/>
               </div>
               <div className="uptodate">
                    <img src="/images/home-careers.png" className="upto-img"/>
               </div>
          </div>
     )
}

export default Home
