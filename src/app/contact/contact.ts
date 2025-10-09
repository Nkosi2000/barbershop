import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">GET IN TOUCH</h2>
          <p class="section-subtitle">Ready to transform your look? Book your appointment or reach out to us</p>
        </div>

        <div class="contact-content">
          <!-- Contact Information -->
          <div class="contact-info">
            <div class="info-card">
              <div class="info-header">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 class="info-title">Visit Our Salon</h3>
              </div>
              <div class="info-details">
                <p class="info-text">123 Beauty Street</p>
                <p class="info-text">Prestige District</p>
                <p class="info-text">Johannesburg, 2000</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-header">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 class="info-title">Contact Info</h3>
              </div>
              <div class="info-details">
                <p class="info-text">+27 11 123 4567</p>
                <p class="info-text">info@premiumbeauty.co.za</p>
                <p class="info-text">@premiumbeauty_sa</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-header">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <h3 class="info-title">Business Hours</h3>
              </div>
              <div class="info-details">
                <div class="hours-row">
                  <span class="day">Monday - Friday</span>
                  <span class="time">8:00 AM - 7:00 PM</span>
                </div>
                <div class="hours-row">
                  <span class="day">Saturday</span>
                  <span class="time">9:00 AM - 6:00 PM</span>
                </div>
                <div class="hours-row">
                  <span class="day">Sunday</span>
                  <span class="time">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h4 class="social-title">Follow Us</h4>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#000">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <div class="form-card">
              <h3 class="form-title">Book Your Appointment</h3>
              <p class="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" id="name" class="form-input" placeholder="Enter your full name">
                  </div>
                  <div class="form-group">
                    <label for="phone" class="form-label">Phone Number</label>
                    <input type="tel" id="phone" class="form-input" placeholder="+27 11 123 4567">
                  </div>
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email Address</label>
                  <input type="email" id="email" class="form-input" placeholder="your@email.com">
                </div>

                <div class="form-group">
                  <label for="service" class="form-label">Service Interested In</label>
                  <select id="service" class="form-select">
                    <option value="">Select a service</option>
                    <option value="styling">Hair Styling</option>
                    <option value="treatment">Hair Treatment</option>
                    <option value="skincare">Skincare</option>
                    <option value="nails">Nail Care</option>
                    <option value="piercing">Piercings</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="date" class="form-label">Preferred Date</label>
                  <input type="date" id="date" class="form-input">
                </div>

                <div class="form-group">
                  <label for="message" class="form-label">Additional Message</label>
                  <textarea id="message" class="form-textarea" rows="4" placeholder="Tell us about your specific requirements..."></textarea>
                </div>

                <button type="submit" class="submit-btn">
                  <span class="btn-text">Book Appointment</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="btn-icon">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 5rem 1.5rem;
      background: linear-gradient(135deg, #000 0%, #000 100%);
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
      color: white;
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
      color: #e8c100ff;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
      font-family: 'Georgia', serif;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card {
      background: white;
      border-radius: 0px;
      padding: 2rem;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      border: 1px solid #eaeaea;
      transition: all 0.3s ease;
    }

    .info-card:hover {
      transform: translateY(-5px);
      border: 2px solid #e8c100ff;
      box-shadow: 0 15px 30px #fff;
    }

    .info-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .info-icon {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #f8f6f4 0%, #f0ebe5 100%);
      border-radius: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #e8c100ff;
    }

    .info-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: #000;
      font-family: 'Georgia', serif;
    }

    .info-details {
      space-y: 0.5rem;
    }

    .info-text {
      color: #666;
      margin-bottom: 0.5rem;
      font-family: 'Georgia', serif;
    }

    .hours-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .hours-row:last-child {
      border-bottom: none;
    }

    .day {
      color: #000;
      font-weight: 500;
      font-family: 'Georgia', serif;
    }

    .time {
      color: #666;
      font-family: 'Georgia', serif;
    }

    .social-links {
      background: linear-gradient(155deg, #e8c100ff 26%, #fff 5%, #fff 81%, #000 0%);
      border-radius: 0px;
      padding: 2rem;
      border: 2px solid #000;
    }

    .social-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 1rem;
      text-align: center;
      font-family: 'Georgia', serif;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .social-icon {
      width: 45px;
      height: 45px;
      background: white;
      border-radius: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #000;
      transition: all 0.3s ease;
    }

    .social-icon:hover {
      background: #000;
      transform: translateY(-3px);
    }

    .social-icon:hover svg {
      fill: #e8c100ff;
    }

    .contact-form-container {
      position: relative;
    }

    .form-card {
      background: white;
      border-radius: 0px;
      padding: 2.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      border: 2px solid #000;
      position: sticky;
      top: 2rem;
    }

    .form-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #000;
      margin-bottom: 0.5rem;
      text-align: center;
      font-family: 'Georgia', serif;
    }

    .form-subtitle {
      color: #666;
      text-align: center;
      margin-bottom: 2rem;
      font-family: 'Georgia', serif;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .form-label {
      font-weight: 500;
      color: #000;
      margin-bottom: 0.5rem;
      font-family: 'Georgia', serif;
    }

    .form-input,
    .form-select,
    .form-textarea {
      padding: 0.8rem 1rem;
      border: 2px solid #eaeaea;
      border-radius: 0px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
      font-family: 'Georgia', serif;
    }

    .form-input:focus,
    .form-select:focus,
    .form-textarea:focus {
      outline: none;
      border-color: #e8c100ff;
      box-shadow: 0 0 0 3px rgba(232, 193, 0, 0.1);
    }

    .form-textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-btn {
      background: linear-gradient(90deg, #e8c100ff);
      color: #000;
      border: 2px solid #000;
      padding: 1rem 2rem;
      border-radius: 0px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      font-family: 'Georgia', serif;
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      color: #fff;
      background: #000;
      border-color: #e8c100ff;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }

    .btn-icon {
      transition: transform 0.3s ease;
    }

    .submit-btn:hover .btn-icon {
      transform: translateX(3px);
    }

    /* Responsive Design */
    @media (max-width: 968px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .form-card {
        position: static;
      }
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 3rem 1rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .form-row {
        grid-template-columns: 1fr;
      }

      .info-card {
        padding: 1.5rem;
      }

      .form-card {
        padding: 2rem;
      }

      .social-icons {
        gap: 1rem;
      }

      .social-icon {
        width: 40px;
        height: 40px;
      }
    }

    @media (max-width: 480px) {
      .contact-content {
        gap: 2rem;
      }

      .info-header {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }

      .hours-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.2rem;
      }
    }
  `]
})
export class Contact {
  // Component logic can be added here
}