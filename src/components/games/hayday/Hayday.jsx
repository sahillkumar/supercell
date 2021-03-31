import React, { useContext } from 'react'
import './hayday.css'
import { DataContext } from '../../../context'
import ReactPlayer from 'react-player'
import {IoPlayOutline} from 'react-icons/io5'

function Hayday() {
     const img ="https://cdn.supercell.com/supercell.com/210330120958/supercell.com/files/styles/hero_image_large/public/bg_hero_hayday.jpg?itok=JMThcu0r&timestamp=1544552030"

     const data = useContext(DataContext);
     const videos = data?data.videos:null;
     console.log(videos);

     return (
          <div className="container-fluid">
               <div className="hayday-bg">
                    <img src={img} className="hayday-img"/>
               </div>
               <div className="hayday-farm">
                    <div className="row">
                         <div className="col col-md-6">
                              <img src="/images/farm.png" className="farm-img"/>
                         </div>
                         <div className="col col-md-6 farm-article">
                         <p >FARM WITH FRIENDS AND FAMILY</p>
                         <div>
                              You don’t have to be from a farm to be a great farmer. Hay Day lets you get back to nature and experience the simple life of working the land. It’s a special game set in a real special place. Food grows free, people smile and the animals are always happy to see you. It never rains here, but the crops never die. And if you’re craving a little bacon, one of the pigs will be happy to fry some up for you. After all, what are pigs... oops, we mean neighbors for?
                         </div>
                         </div>
                    </div>
               </div>
               <hr/>
               <div className="evolving">
               <img src="/images/evolving.png" className="upto-img"/>
               </div>
               <div className="uptodate">
                    <img src="/images/upto.png" className="upto-img"/>
               </div>
               <div className="container-fluid vids">
               <div className="container col-md-8">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
               <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
               </ol>
               <div class="carousel-inner">
                    <div class="carousel-item active">
                         <div className="row videos">
                              <div className="col">
                                   <div className="card">
                                        <ReactPlayer 
                                        controls 
                                        url="https://www.youtube.com/watch?v=5BQOgUWU59w"
                                        playIcon={<IoPlayOutline className="playicon"/>}
                                        playing
                                        light="https://cdn.supercell.com/supercell.com/210330120958/supercell.com/files/games_hayday_video_toomuchwool_thumbnail.jpg"
                                        width= "580px"
                                        height="350px"
                                        />
                                        <a href ="https://www.youtube.com/watch?v=5BQOgUWU59w">
                                             <div className="title">
                                             <h3 className="title-name">Too Much Wool</h3>
                                                  <span className="yt-icon">
                                                       <img src="/images/ytb.png" className="yt"/>
                                                  </span>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                              <div className="col">
                                   <div className="card">
                                        <ReactPlayer 
                                        controls 
                                        url="https://www.youtube.com/watch?v=OStAo1NTi2k"
                                        playIcon={<IoPlayOutline className="playicon"/>}
                                        playing
                                        light="https://cdn.supercell.com/supercell.com/210330120958/supercell.com/files/games_hayday_video_cake_thumbnail.jpg"
                                        width= "580px"
                                        height="350px"
                                        />
                                        <a href ="https://www.youtube.com/watch?v=OStAo1NTi2k">
                                             <div className="title">
                                             <h3 className="title-name">Cake</h3>
                                                  <span className="yt-icon">
                                                       <img src="/images/ytb.png" className="yt"/>
                                                  </span>
                                             </div>
                                        </a>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="carousel-item">
                    <div className="row videos">
                         <div className="col ">
                              <div className="card">
                                   <ReactPlayer 
                                   controls 
                                   url="https://www.youtube.com/watch?v=eL7GZYOFrDc"
                                   playIcon={<IoPlayOutline className="playicon"/>}
                                   playing
                                   light="https://cdn.supercell.com/supercell.com/210330120958/supercell.com/files/games_hayday_video_grouphug_thumbnail.jpg"
                                   width= "580px"
                                   height="350px"
                                   />
                                   
                                   <a href ="https://www.youtube.com/watch?v=eL7GZYOFrDc">
                                        <div className="title">
                                        <h3 className="title-name">Hay Day Neighborhood Group Hug</h3>
                                             <span className="yt-icon">
                                                  <img src="/images/ytb.png" className="yt"/>
                                             </span>
                                        </div>
                                   </a>
                              </div>
                         </div>
                         <div className="col">
                              <div className="card">
                                   <ReactPlayer 
                                   controls 
                                   url="https://www.youtube.com/watch?v=dloBiZdmgHw"
                                   playIcon={<IoPlayOutline className="playicon"/>}
                                   playing
                                   light="https://cdn.supercell.com/supercell.com/210330120958/supercell.com/files/games_hayday_video_hayday360_thumbnail.jpg"
                                   width= "580px"
                                   height="350px"
                                   />
                                   
                                   <a href ="https://www.youtube.com/watch?v=dloBiZdmgHw">
                                        <div className="title">
                                        <h3 className="title-name">Hay Day 360 Hug</h3>
                                             <span className="yt-icon">
                                                  <img src="/images/ytb.png" className="yt"/>
                                             </span>
                                        </div>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
               </a>
               </div>
               </div>
               </div>
          </div>
     )
}

export default Hayday
