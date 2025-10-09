import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content">
          <h2 class="section-title">WELCOME TO MHLENGIE'S SALON</h2>
          <div class="divider"></div>
          <p class="about-text">
            Welcome to Mhlengie's Salon, where your hair is the ultimate accessory 
            and your confidence is our craft. We are more than a salon; we are a 
            destination for transformation and empowerment. Step into our serene oasis 
            where our talented stylists are artists, dedicated to listening to your vision 
            and translating it into a hairstyle that reflects your unique beauty and spirit. 
            Using only the finest products and techniques, we provide a luxurious experience 
            from the first consultation to the final reveal. This is your time to relax, 
            rejuvenate, and rediscover your most radiant self.
          </p>
          <button class="read-more-btn">READ MORE</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 80px 0;
      background-color: #f9f6f2;
      font-family: 'Georgia', serif;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .about-content {
      max-width: 700px;
      margin: 0 auto;
      text-align: center;
    }
    
    .section-title {
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #333;
    }
    
    .divider {
      width: 60px;
      height: 0.2rem;
      background-color: #e8c100ff;
      margin: 0 auto 30px;
    }
    
    .about-text {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #666;
      margin-bottom: 30px;
    }
    
    .read-more-btn {
      font-family: 'Bebas Neue', sans-serif;
      background-color: #000;
      color: #fff;
      border: 2px solid  #e8c100ff;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .read-more-btn:hover {
      background-color: #e8c100ff !important;
      color: #000;
      border-color: #000;
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }
      
      .about-text {
        font-size: 1rem;
      }
    }
  `]
})
export class About {}