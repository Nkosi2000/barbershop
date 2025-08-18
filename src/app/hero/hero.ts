import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  //imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-main-content">
          <h1 class="hero-title">BEAUTY & HAIR SALON</h1>
          <p class="hero-subtitle">CHANGE YOUR LOOK WITH OUR TALENTED STYLISTS</p>
          <button class="hero-button">OUR SERVICES</button>
        </div>
      </div>
      <img src="watermark2.png" alt="Watermark" class="hero-watermark" />
    </section>
  `,
  styles: [`
    .hero-section {
    position: relative;
    background: url('public/mhlengi.jpg') no-repeat;
    /* Customize these values to show the desired portion */
    background-size: 100%; /* Zoom level - increase to zoom out, decrease to zoom in */
    background-position: 30% 10%; /* X% Y% - adjust to pan to different areas */
    color: white;
    font-family: 'Playfair Display', serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
  }
    .hero-watermark {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 60px; /* Adjust size as needed */
    opacity: 100; /* Adjust transparency as needed */
    pointer-events: none; /* So it doesn't block clicks */
    z-index: 2;
  }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4); /* Dark overlay for better text readability */
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .hero-nav {
      display: flex;
      justify-content: center;
      gap: 25px;
      margin-bottom: 80px;
      flex-wrap: wrap;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 2px;
      transition: color 0.3s;
    }
    
    .nav-link:hover {
      color: #c7a97f; /* Gold color for hover */
    }
    
    .book-online {
      font-weight: bold;
      color: #c7a97f; /* Gold color */
    }
    
    .salon-name {
      font-size: 48px;
      margin-bottom: 60px;
      letter-spacing: 5px;
      color: white;
    }
    
    .hero-main-content {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .hero-title {
      font-size: 72px;
      font-weight: 400;
      margin-bottom: 20px;
      letter-spacing: 5px;
      line-height: 1.2;
      color: white;
    }
    
    .hero-subtitle {
      font-size: 18px;
      margin-bottom: 40px;
      letter-spacing: 3px;
      color: white;
    }
    
    .hero-button {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      padding: 15px 30px;
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .hero-button:hover {
      background-color: white;
      color: #333;
    }
    
    @media (max-width: 768px) {
      .hero-nav {
        gap: 15px;
        margin-bottom: 40px;
      }
      
      .hero-title {
        font-size: 48px;
      }
      
      .hero-subtitle {
        font-size: 16px;
      }
    }
  `]
})
export class Hero {}