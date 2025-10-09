import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: true,
  template: `
    <section id="staff" class="staff-section">
      <div class="container">
        <div class="staff-content">
          <h2 class="section-title">MEET OUR EXPERT TEAM</h2>
          <div class="divider"></div>
          <p class="staff-intro">
            Our talented team of beauty professionals is dedicated to bringing out your best self. 
            Each stylist brings unique expertise and passion to create your perfect look.
          </p>
          
          <div class="staff-grid">
            <div class="staff-member">
              <div class="staff-image">
                <img src="bento/mhlengi3favoicon.png" alt="Mhlengie - Head Stylist" class="staff-img">
              </div>
              <h3 class="staff-name">MHLENGIE</h3>
              <p class="staff-role">Head Stylist & Owner</p>
              <p class="staff-bio">
                With over 10 years of experience, Mhlengie specializes in precision cuts 
                and color transformation that enhance your natural beauty.
              </p>
            </div>
            
            <div class="staff-member">
              <div class="staff-image">
                <img src="bento/pic13.png" alt="Sarah - Color Specialist" class="staff-img">
              </div>
              <h3 class="staff-name">ZINHLE</h3>
              <p class="staff-role">Color Specialist</p>
              <p class="staff-bio">
                Zinhle's expertise in balayage and creative coloring techniques will bring 
                dimension and life to your hair like never before.
              </p>
            </div>
            
            <div class="staff-member">
              <div class="staff-image">
                <img src="bento/pic27.png" alt="David - Senior Stylist" class="staff-img">
              </div>
              <h3 class="staff-name">THULANI</h3>
              <p class="staff-role">Senior Stylist</p>
              <p class="staff-bio">
                Thulani excels in modern cuts and styling, ensuring you leave the salon 
                with a look that's both trendy and perfectly suited to your lifestyle.
              </p>
            </div>
          </div>
          
          <button class="meet-team-btn">MEET THE FULL TEAM</button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .staff-section {
      padding: 80px 0;
      background-color: #0a0a0a;
      font-family: 'Georgia', serif;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .staff-content {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }
    
    .section-title {
      font-family: 'Georgia', serif;
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #f9f6f2;
    }
    
    .divider {
      width: 60px;
      height: 0.2rem;
      background-color: #e8c100ff;
      margin: 0 auto 30px;
    }
    
    .staff-intro {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #e8c100ff;
      //color: #f9f6f2;
      font-family: 'Georgia', serif;
      margin-bottom: 50px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .staff-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      margin-bottom: 50px;
    }
    
    .staff-member {
      background-color: #f9f6f2;
      padding: 30px 20px;
      border-radius: 0px;
      //box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      box-shadow: 0 5px 15px #e8c100ff;
      transition: transform 0.3s ease;
    }
    
    .staff-member:hover {
      transform: translateY(-5px);
    }
    
    .staff-image {
      width: 150px;
      height: 150px;
      margin: 0 auto 20px;
      border-radius: 0%;
      background: #000;
      overflow: hidden;
      border: 3px solid #e8c100ff;
    }
    
    .staff-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .staff-name {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 5px;
      color: #333;
      letter-spacing: 1px;
    }
    
    .staff-role {
      font-size: 1rem;
      color: #e8c100ff;
      margin-bottom: 15px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    
    .staff-bio {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #666;
    }
    
    .meet-team-btn {
      font-family: 'Bebas Neue', sans-serif;
      background-color: #000;
      color: #fff;
      border: 2px solid #e8c100ff;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      letter-spacing: 2px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .meet-team-btn:hover {
      background-color: #e8c100ff !important;
      color: #000;
      border-color: #000;
    }
    
    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }
      
      .staff-intro {
        font-size: 1rem;
      }
      
      .staff-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .staff-member {
        padding: 20px 15px;
      }
    }
    
    @media (max-width: 480px) {
      .staff-section {
        padding: 60px 0;
      }
      
      .section-title {
        font-size: 1.8rem;
      }
      
      .staff-image {
        width: 120px;
        height: 120px;
      }
    }
  `]
})
export class Staff {}