import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer-section">
      <div class="container">
        <!-- Main Footer Content -->
        <div class="footer-content">
          <!-- Brand Column -->
          <div class="footer-column brand-column">
            <h3 class="brand-title">Premium Beauty</h3>
            <p class="brand-description">
              Experience luxury and excellence with our professional beauty services. 
              Transform your look and elevate your confidence with our expert team.
            </p>
            <div class="social-links">
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
                </svg>
              </a>
              <a href="#" class="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="footer-column">
            <h4 class="column-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home" class="footer-link">Home</a></li>
              <li><a href="#services" class="footer-link">Services</a></li>
              <li><a href="#testimonials" class="footer-link">Testimonials</a></li>
              <li><a href="#contact" class="footer-link">Contact</a></li>
              <li><a href="#" class="footer-link">Book Appointment</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div class="footer-column">
            <h4 class="column-title">Our Services</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Hair Styling</a></li>
              <li><a href="#" class="footer-link">Hair Treatments</a></li>
              <li><a href="#" class="footer-link">Skincare</a></li>
              <li><a href="#" class="footer-link">Nail Care</a></li>
              <li><a href="#" class="footer-link">Piercings</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="footer-column">
            <h4 class="column-title">Contact Info</h4>
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <span>123 Beauty Street, Johannesburg</span>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span>info@premiumbeauty.co.za</span>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
                  </svg>
                </div>
                <span>+27 11 123 4567</span>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#e8c100ff">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                </div>
                <span>Mon-Fri: 8AM-7PM, Sat: 9AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-divider"></div>
          <div class="bottom-content">
            <p class="copyright">
              &copy; 2024 Premium Beauty Salon. All rights reserved.
            </p>
            <div class="legal-links">
              <a href="#" class="legal-link">Privacy Policy</a>
              <a href="#" class="legal-link">Terms of Service</a>
              <a href="#" class="legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Developer Watermark - Now as a proper link -->
      <a href="#" class="developer-watermark" target="_blank" rel="noopener noreferrer">
        <img src="watermark.png" alt="Developer Portfolio" class="watermark-image" />
        <span class="watermark-text">Developed by: Nkosi</span>
      </a>
    </footer>
  `,
  styles: [`
    .footer-section {
      background: linear-gradient(135deg, #f9f6f2 0%, #f9f6f2 100%);
      color: #000;
      padding: 4rem 1.5rem 3rem;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      position: relative;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-column {
      display: flex;
      flex-direction: column;
    }

    .brand-column {
      max-width: 300px;
    }

    .brand-title {
      font-size: 2rem;
      font-weight: 400;
      color: #e8c100ff;
      margin-bottom: 1rem;
      font-family: 'Georgia', serif;
      position: relative;
      display: inline-block;
    }

    .brand-title:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 0.2rem;
      background: linear-gradient(90deg, #e8c100ff);
    }

    .brand-description {
      color: #000;
      line-height: 1.6;
      margin-bottom: 2rem;
      font-family: 'Georgia', serif;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: rgba(232, 193, 0, 0.1);
      border: 1px solid #e8c100ff;
      border-radius: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e8c100ff;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #e8c100ff;
      color: #000;
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(232, 193, 0, 0.3);
    }

    .column-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #e8c100ff;
      margin-bottom: 1.5rem;
      font-family: 'Georgia', serif;
      position: relative;
      display: inline-block;
    }

    .column-title:after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 30px;
      height: 0.2rem;
      background: linear-gradient(90deg, #e8c100ff);
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .footer-link {
      color: black;
      text-decoration: none;
      transition: all 0.3s ease;
      font-family: 'Georgia', serif;
      position: relative;
      padding-left: 0;
    }

    .footer-link:hover {
      color: #e8c100ff;
      padding-left: 8px;
    }

    .footer-link:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 1px;
      background: #e8c100ff;
      transition: width 0.3s ease;
    }

    .footer-link:hover:before {
      width: 4px;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-item {
      display: flex;
      align-items: flex-start;
      gap: 0.8rem;
      color: #000;
      font-family: 'Georgia', serif;
    }

    .contact-icon {
      flex-shrink: 0;
      margin-top: 0.1rem;
    }

    .footer-bottom {
      border-top: 1px solid #444;
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, #e8c100ff, transparent);
      margin-bottom: 2rem;
    }

    .bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      color: #000;
      font-family: 'Georgia', serif;
    }

    .legal-links {
      display: flex;
      gap: 2rem;
    }

    .legal-link {
      color: #000;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
      font-family: 'Georgia', serif;
    }

    .legal-link:hover {
      color: #e8c100ff;
    }

    /* Developer Watermark - Now as a proper link */
    .developer-watermark {
      position: absolute;
      bottom: 15px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 8px;
      opacity: 1;
      transition: all 0.3s ease;
      text-decoration: none;
      z-index: 2;
      cursor: pointer;
    }

    .developer-watermark:hover {
      opacity: 5;
      text-decoration: none;
    }

    .watermark-image {
      width: 25px;
      height: 25px;
      object-fit: contain;
      transition: all 0.3s ease;
    }

    .developer-watermark:hover .watermark-image {
      transform: scale(1.5);
    }

    .watermark-text {
      font-size: 0.75rem;
      color: #666;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      letter-spacing: 0.5px;
      white-space: nowrap;
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .developer-watermark:hover .watermark-text {
      color: #e8c100ff;
      text-decoration: none;
    }

    /* Responsive Design */
    @media (max-width: 968px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .brand-column {
        max-width: none;
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 768px) {
      .footer-section {
        padding: 3rem 1rem 2.5rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .legal-links {
        justify-content: center;
      }

      .social-links {
        justify-content: center;
      }

      .brand-title {
        font-size: 1.8rem;
      }

      .developer-watermark {
        bottom: 10px;
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        gap: 1.5rem;
      }

      .legal-links {
        flex-direction: column;
        gap: 0.5rem;
      }

      .social-links {
        gap: 0.8rem;
      }

      .social-link {
        width: 35px;
        height: 35px;
      }

      .developer-watermark {
        flex-direction: column;
        gap: 4px;
        text-align: center;
      }

      .watermark-text {
        font-size: 0.7rem;
      }

      .watermark-image {
        width: 20px;
        height: 20px;
      }
    }

    /* Additional responsive adjustments for very small screens */
    @media (max-width: 360px) {
      .developer-watermark {
        bottom: 8px;
      }
      
      .watermark-image {
        width: 18px;
        height: 18px;
      }
      
      .watermark-text {
        font-size: 0.65rem;
      }
    }
  `]
})
export class Footer {
  // Component logic can be added here
}