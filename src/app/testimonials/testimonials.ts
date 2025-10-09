import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">CLIENT EXPERIENCES</h2>
          <p class="section-subtitle">Discover why our clients keep coming back for exceptional beauty care</p>
        </div>

        <div class="testimonials-showcase">
          <!-- Featured Testimonial -->
          <div class="featured-testimonial">
            <div class="featured-badge">Client Favorite</div>
            <div class="featured-content">
              <div class="quote-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#e8c100ff">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.372-3.987 4.445-4.247 7.219.166-.044.332-.088.498-.088 1.06 0 1.87.87 1.87 2.13 0 1.19-.7 2.166-1.7 2.166-.83 0-1.55-.52-1.86-1.26zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.372-3.987 4.445-4.247 7.219.166-.044.332-.088.498-.088 1.06 0 1.87.87 1.87 2.13 0 1.19-.7 2.166-1.7 2.166-.83 0-1.55-.52-1.86-1.26z"/>
                </svg>
              </div>
              <blockquote class="featured-text">
                "The attention to detail and professional care is unmatched. My hairstyle has received 
                countless compliments. This is more than a salon - it's a luxury experience that makes 
                you feel truly valued and beautiful."
              </blockquote>
              <div class="featured-client">
                <div class="client-main">
                  <div class="client-avatar">
                    <div class="avatar-img">SM</div>
                  </div>
                  <div class="client-info">
                    <h3 class="client-name">Sarah Mitchell</h3>
                    <p class="client-service">Premium Hair Styling Client</p>
                    <div class="rating">
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                      <span class="star">★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Testimonials Grid -->
          <div class="testimonials-grid">
            <!-- Testimonial 1 -->
            <div class="testimonial-card">
              <div class="card-header">
                <div class="service-icon">
                  <img src="bento/hairtreatmenticon.png" alt="Hair Treatment" class="icon" />
                </div>
                <div class="rating">
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                </div>
              </div>
              <p class="testimonial-text">
                "The hair treatment transformed my damaged hair. It's now smooth, shiny, and healthy-looking. 
                Absolutely worth every penny!"
              </p>
              <div class="client-details">
                <h4 class="client-name">Jessica Taylor</h4>
                <p class="visit-date">Regular Client • 2+ years</p>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="testimonial-card">
              <div class="card-header">
                <div class="service-icon">
                  <img src="bento/skincareicon.png" alt="Skincare" class="icon" />
                </div>
                <div class="rating">
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                </div>
              </div>
              <p class="testimonial-text">
                "The skincare treatment completely revived my complexion. Professional, gentle, and the 
                results are absolutely stunning!"
              </p>
              <div class="client-details">
                <h4 class="client-name">Michelle Rodriguez</h4>
                <p class="visit-date">First-time Client</p>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="testimonial-card">
              <div class="card-header">
                <div class="service-icon">
                  <img src="bento/nailcareicon.png" alt="Nail Care" class="icon" />
                </div>
                <div class="rating">
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                  <span class="star">★</span>
                </div>
              </div>
              <p class="testimonial-text">
                "My nails have never looked better! The attention to detail and the luxurious experience 
                makes every visit worthwhile."
              </p>
              <div class="client-details">
                <h4 class="client-name">Amanda Chen</h4>
                <p class="visit-date">Monthly Client • 1 year</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="trust-indicators">
          <div class="trust-item">
            <div class="trust-number">500+</div>
            <div class="trust-label">Happy Clients</div>
          </div>
          <div class="trust-item">
            <div class="trust-number">98%</div>
            <div class="trust-label">Satisfaction Rate</div>
          </div>
          <div class="trust-item">
            <div class="trust-number">4.9</div>
            <div class="trust-label">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
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

    .testimonials-showcase {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .featured-testimonial {
      background: linear-gradient(155deg, #e8c100ff 26%, #fff 5%, #fff 81%, #000 0%);
      border-radius: 0px;
      padding: 3rem;
      position: relative;
      border: 2px solid #000;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .featured-badge {
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(90deg, #e8c100ff);
      color: #000;
      padding: 0.5rem 2rem;
      border-radius: 0px;
      border: 2px solid #000;
      font-size: 0.9rem;
      letter-spacing: 2px;
      font-family: 'Bebas Neue', sans-serif;
      font-weight: 400;
    }

    .featured-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .quote-icon {
      margin-bottom: 1.5rem;
    }

    .featured-text {
      font-size: 1.3rem;
      line-height: 1.7;
      color: #333;
      font-style: italic;
      margin-bottom: 2.5rem;
      font-family: 'Georgia', serif;
    }

    .featured-client {
      display: flex;
      justify-content: center;
    }

    .client-main {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .client-avatar {
      width: 70px;
      height: 70px;
      background: linear-gradient(135deg, #e8c100ff, #f0ebe5);
      border-radius: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #000;
    }

    .avatar-img {
      font-size: 1.5rem;
      font-weight: 600;
      color: #000;
      font-family: 'Georgia', serif;
    }

    .client-info {
      text-align: left;
    }

    .client-name {
      font-size: 1.3rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 0.3rem;
      font-family: 'Georgia', serif;
    }

    .client-service {
      color: #666;
      margin-bottom: 0.8rem;
      font-family: 'Georgia', serif;
    }

    .rating {
      display: flex;
      gap: 0.2rem;
    }

    .star {
      color: #e8c100ff;
      font-size: 1.1rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      border-radius: 0px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      border: 1px solid #eaeaea;
      position: relative;
      overflow: hidden;
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
      border: 2px solid #000;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .testimonial-card:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #e8c100ff);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .service-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .rating-small {
      display: flex;
      gap: 0.1rem;
    }

    .testimonial-text {
      color: #666;
      line-height: 1.6;
      font-style: italic;
      margin-bottom: 1.5rem;
      font-family: 'Georgia', serif;
    }

    .client-details {
      border-top: 1px solid #eaeaea;
      padding-top: 1rem;
    }

    .client-name {
      font-size: 1.1rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 0.3rem;
      font-family: 'Georgia', serif;
    }

    .visit-date {
      color: #888;
      font-size: 0.9rem;
      font-family: 'Georgia', serif;
    }

    .trust-indicators {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      text-align: center;
      padding-top: 3rem;
      border-top: 1px solid #eaeaea;
    }

    .trust-item {
      padding: 1rem;
    }

    .trust-number {
      font-size: 2.5rem;
      font-weight: 600;
      color: #e8c100ff;
      margin-bottom: 0.5rem;
      font-family: 'Georgia', serif;
    }

    .trust-label {
      color: #666;
      font-size: 0.9rem;
      font-family: 'Georgia', serif;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .testimonials-section {
        padding: 3rem 1rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .featured-testimonial {
        padding: 2rem 1.5rem;
      }
      
      .featured-text {
        font-size: 1.1rem;
      }
      
      .client-main {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
      
      .client-info {
        text-align: center;
      }
      
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
      
      .trust-indicators {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }
      
      .trust-number {
        font-size: 2rem;
      }
    }
  `]
})
export class Testimonials {
  // Component logic can be added here
}