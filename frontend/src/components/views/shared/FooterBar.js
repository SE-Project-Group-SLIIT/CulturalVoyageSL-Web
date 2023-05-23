import React from 'react'
import "./Footer.css";

const FooterBar = () => {
  return (
    <footer class="footer">
    <div class="footer__addr">
      <h1 class="footer__logo">CulturalVoyageSL</h1>
          
      <h2>Travel Guide</h2>
      <ul class="nav__ul">
          <li>
            <a href="#">Guide</a>
          </li>
          </ul>
    </div>
    
    <ul class="footer__nav">
      <li class="nav__item">
        <h2 class="nav__title">Events</h2>
  
        <ul class="nav__ul">
          <li>
            <a href="#">Religious</a>
          </li>
  
          <li>
            <a href="#">Entertain</a>
          </li>
              
          <li>
            <a href="#">Conference</a>
          </li>
          <li>
            <a href="#">Exhibition</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item nav__item--extra">
        <h2 class="nav__title">Sites</h2>
        
        <ul class="nav__ul nav__ul--extra">
          <li>
            <a href="#">Historical</a>
          </li>
          
          <li>
            <a href="#">Religious</a>
          </li>
          
          <li>
            <a href="#">Other</a>
          </li>
        </ul>
      </li>
      
      <li class="nav__item">
        <h2 class="nav__title">Legal</h2>
        
        <ul class="nav__ul">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          
          <li>
            <a href="#">Terms of Use</a>
          </li>
          
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </li>
    </ul>
    
    <center> 
      <div class="legal">
      <center><p>&copy; 2023 CulturalVoyageSL. All rights reserved.</p></center>
      
    </div>
    </center>
  </footer>
  )
}

export default FooterBar