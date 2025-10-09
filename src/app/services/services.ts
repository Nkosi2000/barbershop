import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">OUR PREMIUM SERVICES</h2>
          <p class="section-subtitle">Experience luxury and excellence with our professional beauty services</p>
        </div>

        <div class="services-grid">
          <!-- Service 1 -->
          <div class="service-card">
            <div class="card-icon">
              <!-- <i class="fas fa-cut"></i> -->
              <img src="bento/hairtreatmenticon.png" alt="Dry Icon" class="icon-img" />
            </div>
            <h3 class="card-title">Styling</h3>
            <p class="card-description">Keep your look maintaned, organized and linky smooth, for a longer lasting impression.</p>
            <ul class="service-features">
              <li>Qaulity treatments</li>
              <li>Hair relaxer</li>
              <li>Hair restoration</li>
              <li>Blowout</li>
            </ul>
            <div class="card-footer">
              <button class="service-btn">Book Now</button>
              <span class="price">From R85</span>
            </div>
          </div>

          <!-- Service 2 -->
          <div class="service-card featured">
            <div class="card-badge">Most Popular</div>
            <div class="card-icon">
              <!-- <i class="fas fa-palette"></i> -->
              <img src="bento/haircuticon.png" alt="Haircut Icon" class="icon-img" />
            </div>
            <h3 class="card-title">Hair Styling</h3>
            <p class="card-description">Transform your look with our expert hairstylists who create the perfect style for any occasion.</p>
            <ul class="service-features">
              <li>Custom haircuts</li>
              <li>Styling & blowouts</li>
              <li>Special occasion styling</li>
            </ul>
            <div class="card-footer">
              <button class="service-btn">Book Now</button>
              <span class="price">From R65</span>
            </div>
          </div>

          <!-- Service 3 -->
          <div class="service-card">
            <div class="card-icon">
              <!-- <i class="fas fa-spa"></i> -->
              <img src="bento/skincareicon.png" alt="Haircut Icon" class="icon-img" />
            </div>
            <h3 class="card-title">Skincare</h3>
            <p class="card-description">Rejuvenate your skin with our premium facials and skincare treatments.</p>
            <ul class="service-features">
              <li>Hydrating facials</li>
              <li>Anti-aging treatments</li>
              <li>Custom skincare plans</li>
            </ul>
            <div class="card-footer">
              <button class="service-btn">Book Now</button>
              <span class="price">From R75</span>
            </div>
          </div>

          <!-- Service 4 -->
          <div class="service-card">
            <div class="card-icon">
              <!-- <i class="fas fa-hand-sparkles"></i> -->
              <img src="bento/nailcareicon.png" alt="Haircut Icon" class="icon-img" />
            </div>
            <h3 class="card-title">Nail Care</h3>
            <p class="card-description">Luxurious manicure and pedicure services. Nail cleaing & repolishing.</p>
            <ul class="service-features">
              <li>Gel manicures</li>
              <li>Spa pedicures</li>
              <li>Nail art design</li>
            </ul>
            <div class="card-footer">
              <button class="service-btn">Book Now</button>
              <span class="price">From R45</span>
            </div>
          </div>

          <!-- Service 5 -->
          <div class="service-card">
            <div class="card-icon">
              <!-- <i class="fas fa-hand-sparkles"></i> -->
              <img src="bento/piercingicon.png" alt="Haircut Icon" class="icon-img" />
            </div>
            <h3 class="card-title">Piercings</h3>
            <p class="card-description">Custom piercings for that spark of satisfaction.</p>
            <ul class="service-features">
              <li>Nose piercings</li>
              <li>Belly button piercings</li>
              <li>Lip piercings</li>
              <li>Much more...</li>
            </ul>
            <div class="card-footer">
              <button class="service-btn">Book Now</button>
              <span class="price">From R55</span>
            </div>
          </div>
        </div>
        

        <!-- <div class="section-footer">
          <p class="cta-text">Ready to transform your look?</p>
          <button class="cta-button">View All Services</button>
        </div> -->
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 5rem 1.5rem;
      background: linear-gradient(135deg, #f8f6f4 0%, #f0ebe5 100%);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 400;
      color: #333;
      letter-spacing: 1px;
      margin-bottom: 20px;
      position: relative;
      display: inline-block;
      font-family: 'Georgia', serif;
    }

    .section-title:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 0.2rem;
      background: linear-gradient(90deg, #e8c100ff);
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      font-family: 'Georgia', serif;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .service-card {
      background: linear-gradient(155deg, #e8c100ff 26%, #fff 5%, #fff 81%, #000 0% );
      border-radius: 0px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .service-card:hover {
      transform: translateY(-6px);
      border: 2px solid #000;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .service-card.featured {
      border: 2px solid #000;
      transform: scale(1.03);
    }

    .service-card.featured:hover {
      border: 3px solid #000;
      transform: scale(1.03) translateY(9px);
      transform: translateY(-6px);
    }

    .card-badge {
      position: absolute;
      top: -12px;
      right: 20px;
      background: linear-gradient(90deg, #e8c100ff);
      color: #000;
      padding: 0.4rem 1rem;
      border-radius: 0px;
      border: 2px solid  #000;
      font-size: 0.8rem;
      letter-spacing: 2px;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
    }

    .icon-img {
      width: 50%;
      height: 50%;
      object-fit: contain;
    }

    .card-icon {
      width: 70px;
      height: 70px;
      //background: linear-gradient(135deg, #f8f6f4 0%, #f0ebe5 100%);
      border-radius: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      //color: #a67c52;
      font-size: 1.8rem;
    }

    .card-title {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 0px;
      text-align: center;
      color: #000;
      margin-bottom: 1rem;
      font-family: 'Georgia', serif;
    }

    .card-description {
      color: #666;
      margin-bottom: 1.5rem;
      line-height: 1.6;
      text-align: center;
      flex-grow: 1;
      font-family: 'Georgia', serif;
    }

    .card-description:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 150px;
      height: 3px;
      background: linear-gradient(90deg, #e8c100ff);
    }

    .service-features {
      list-style: none;
      margin-bottom: 2rem;
    }

    .service-features li {
      padding: 0.5rem 0;
      color: #000;
      position: relative;
      padding-left: 1.5rem;
      font-family: 'Georgia', serif;
    }

    .service-features li:before {
      content: '✓';
      position: absolute;
      left: 0;
      font-family: 'Georgia', serif;
      color: #e8c100ff;
      font-weight: bold;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }

    .service-btn {
      background: linear-gradient(90deg, #e8c100ff);
      color: #000;
      border: 2px solid #000;
      padding: 0.8rem 1.5rem;
      border-radius: 0px;
      font-weight: 400;
      font-family: 'Georgia', serif;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 10px rgba(166, 124, 82, 0.3);
    }

    .service-btn:hover {
      transform: translateY(-2px);
      color: #fff;
      background: #000;
      font-weight: 400;
      border: 2px solid #e8c100ff;
      font-family: 'Georgia', serif;
      box-shadow: 0 6px 15px rgba(166, 124, 82, 0.4);
    }

    .price {
      font-weight: 600;
      color: #e8c100ff;
      font-size: 1.1rem;
    }

    .section-footer {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid #eaeaea;
    }

    .cta-text {
      font-size: 1.2rem;
      color: #2c2c2c;
      margin-bottom: 1.5rem;
    }

    .cta-button {
      background: transparent;
      color: #a67c52;
      border: 2px solid #a67c52;
      padding: 0.8rem 2rem;
      border-radius: 0px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background: #a67c52;
      color: white;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .services-section {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .service-card {
        padding: 1.5rem;
      }
      
      .service-card.featured {
        transform: none;
      }
      
      .service-card.featured:hover {
        transform: translateY(-10px);
      }
    }
  `]
})
export class Services {
  // Component logic can be added here
}