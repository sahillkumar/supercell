import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './footer.css'
import { FaYoutube,FaFacebookSquare,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { useCookies } from 'react-cookie';
import { useState } from 'react';



function Footer() {
     var mycookie = document.cookie
     const [hide, setHide] = useState(false)

     if(mycookie == null){
          setHide(false)
     }

     const set = () =>{
          document.cookie = "cookie-consent-status=dismiss"
          setHide(true)
     }
     

     return (
          <>
         <footer className="footer">
               <div className="container">
               <span className="follow mb-3">Follow us on</span>
               <div className="container-fluid">
                    <nav className="nav">
                         <ul className="social social-media">
                         <li className="nav-link footer-icon">
                              <a href="#"><FaYoutube/></a> 
                         </li>
                         <li className="nav-link footer-icon">
                              <a href="#"><FaFacebookSquare/></a> 
                         </li>
                         <li className="nav-link footer-icon">
                              <a href="#"><FaInstagram/></a> 
                         </li>
               
                         <li className="nav-link footer-icon">
                              <a href="#"> <FaTwitter/></a> 
                         </li>
                         <li className="nav-link footer-icon">
                         <a><FaLinkedin/></a> 
                         </li>
                         <li className="nav-link footer-icon">
                              <a href="#"><span className="iconify" data-icon="simple-icons:glassdoor" data-inline="false"></span></a> 
                         </li>
                         </ul>
                    </nav>
                    <nav className="downloads nav">
                         <li className="">
                              <a href="#"><img src="./images/appstore.svg" alt="" height="55px"/></a> 
                         </li>
               
                         <li className=" ">
                         <a href="#"><img src="./images/googleplay.svg" alt="" height="80px"/></a>  
                         </li>
                    </nav>
                    <hr/>
                    <nav className="footer-menu">
                    <ul className="social m-1 mb-2">
                         <li className="nav-link"><a href="/en/terms-of-service/">Terms of Service</a></li>
                         <li className="nav-link"><a href="/en/privacy-policy/">Privacy Policy</a></li>
                         <li className="nav-link"><a href="/en/parents/">Parent's Guide</a></li>
                         <li className="nav-link"><a href="/en/safe-and-fair-play/">Safe and Fair Play Policy</a></li>
                    </ul>
               </nav>
               </div>
               <div className="footer-end">
               <div className="address text-muted">
                    <address>
                         Supercell Oy<br/>
                         Jätkäsaarenlaituri 1<br/>
                         00180 Helsinki<br/>
                         Finland
                    </address>
               </div>
               <div>
                    <img src="./images/logo.jpg"  className="footer-logo"/>
               </div>
               </div>
               </div>
          </footer>
          {
               hide? (
                    <nav class="navbar fixed-bottom cookiebar text-muted" id="cook" height="0">
                    <div className="learn">
                    <div> Our site uses cookies to enhance your use experience and measure site traffic. </div>
                    <span><strong>Learn More</strong></span>
                    </div>
                    <div>
                         <div className="btn btn-primary gotit" onClick={()=>{set()}}>GOT IT!</div>
                    </div>
               </nav>
               ):(
                    <nav class="navbar fixed-bottom cookiebar text-muted" id="cook" height="80">
                    <div className="learn">
                    <div> Our site uses cookies to enhance your use experience and measure site traffic. </div>
                    <span><strong>Learn More</strong></span>
                    </div>
                    <div>
                         <div className="btn btn-primary gotit" onClick={()=>{set()}}>GOT IT!</div>
                    </div>
               </nav>
               )
          }
       
          </>
     )
     
}

export default Footer
