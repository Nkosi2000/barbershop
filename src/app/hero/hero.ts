import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero-section">
      <div class="hero-image-container">
        <img src="mhlengi.jpg" alt="Beauty Salon" class="hero-background" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <div class="hero-main-content">
          <h1 class="hero-title"><span class="initial">M</span><span class="rest">HLENGIE</span></h1>
          <h1 class="hero-title2"><span class="initial">D</span><span class="middle">e </span><span class="initial">B</span><span class="rest">ARBER</span></h1>
          
          <div class="since-container-landscape">
            <div class="since-content">
              <div class="line"></div>
              <div class="since-text">- since 2021 -</div>
              <div class="line"></div>
            </div>
          </div>

          <p class="hero-subtitle">A CUT ABOVE THE REST</p>
          <p class="hours">MON - SUN : 07:00AM - 16:30PM</p>
          <button class="hero-button">OUR SERVICES</button>
        </div>
      </div>
      <img src="watermark.png" alt="Watermark" class="hero-watermark" />
    </section>
  `,
  styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Aguafina+Script&display=swap');

    .hero-section {
      position: relative;
      color: white;
      font-family: 'Playfair Display', serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    .hero-image-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .hero-background {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 30% 10%;
    }
    
    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
    }
    
    .hero-watermark {
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 60px;
      opacity: 1;
      pointer-events: none;
      z-index: 2;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .hero-main-content {
      max-width: 800px;
      margin: 0;
      text-align: left;
    }
    
    .hero-title, .hero-title2 {
      font-size: clamp(3rem, 7vw, 6rem);
      font-weight: 400;
      margin-bottom: 5px;
      letter-spacing: 8px;
      line-height: 1.1;
      color: #f9f6f2;
      text-transform: uppercase;
    }
    
    .hero-title2 {
      margin-bottom: 30px;
    }

    .since-container-landscape {
      position: absolute;
      top: 50%;
      right: 40px;
      transform: translateY(-50%) rotate(90deg);
      transform-origin: center right;
      z-index: 2;
      display: flex;
      align-items: center;
    }

    .line {
      height: 2px;
      background-color: #f9f6f2;
      flex: 1;
      max-width: 160px;
    }
    
    .since-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.8rem;
      letter-spacing: 3px;
      color: #e0bd0dff;
      margin:  15px;
      text-transform: uppercase;
      white-space: nowrap;
    }
    
    .initial {
      font-family: 'Aguafina Script', cursive;
      font-size: 1.2em;
      font-weight: 700;
      color: #e0bd0dff;
    }
    
    .middle {
      font-size: 0.6em;
      font-weight: 400;
    }
    
    .rest {
      font-size: 0.6em;
      font-weight: 400;
      letter-spacing: 10px;
    }
    
    .hero-subtitle {
      font-size: clamp(0.875rem, 2vw, 1.125rem);
      margin-bottom: 10px;
      letter-spacing: 4px;
      color: #f9f6f2;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      text-transform: uppercase;
    }

    .hours {
      font-size: clamp(0.875rem, 2vw, 1.125rem);
      margin-bottom: 10px;
      color: #e0bd0dff;
    }
    
    .hero-button {
      background-color: transparent;
      color: #f9f6f2;
      border: 2px solid #e8c100ff;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
      position: relative;
      z-index: 3; /* Ensure button stays above watermark */
    }
    
    .hero-button:hover {
      background-color: #e8c100ff;
      color: #000;
      border-color: #f9f6f2 !important;
    }
    
    /* Landscape orientation fix */
    @media (max-height: 600px) and (orientation: landscape) {
      .hero-watermark {
        bottom: 10px;
        left: auto;
        right: 20px;
        width: 40px;
      }
      
      .hero-content {
        padding-bottom: 60px;
      }
      
      .hero-title, .hero-title2 {
        font-size: clamp(2.5rem, 5vw, 4rem);
        margin-bottom: 0;
      }
      
      .hero-title2 {
        margin-bottom: 15px;
      }
      
      .hero-subtitle, .hours {
        margin-bottom: 5px;
        font-size: 0.8rem;
      }
      
      .hero-button {
        padding: 10px 20px;
        font-size: 11px;
        margin-top: 10px; /* Add space above button */
      }
      
      .since-container-landscape {
        right: 20px;
      }
    }
    
    @media (max-width: 768px) {
      .hero-title, .hero-title2 {
        letter-spacing: 5px;
      }
      
      .rest {
        letter-spacing: 6px;
      }
      
      .hero-subtitle {
        letter-spacing: 2px;
      }
      
      .hero-watermark {
        width: 40px;
        bottom: 10px;
        left: 10px;
      }
      
      /* Additional landscape fix for tablets */
      @media (max-height: 500px) and (orientation: landscape) {
        .hero-watermark {
          bottom: 5px;
          right: 10px;
          width: 30px;
        }
        
        .hero-button {
          padding: 8px 16px;
          font-size: 10px;
        }
      }
    }
    
    @media (max-width: 480px) {
      .hero-title, .hero-title2 {
        letter-spacing: 3px;
        font-size: clamp(2.5rem, 8vw, 4rem);
      }
      
      .rest {
        letter-spacing: 4px;
      }
      
      .hero-subtitle {
        letter-spacing: 1px;
      }
      
      .hero-button {
        padding: 12px 24px;
      }
      
      /* Additional landscape fix for mobile */
      @media (max-height: 400px) and (orientation: landscape) {
        .hero-watermark {
          display: none; /* Hide watermark on very small landscape screens */
        }
      }
    }
  `]
})
export class Hero {}