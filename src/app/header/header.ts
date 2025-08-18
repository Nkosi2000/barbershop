import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div class="container-fluid g-0">
        <!-- Left Section (Brand) -->
        <a class="navbar-brand flex-grow-1 flex-lg-grow-0 text-truncate" routerLink="/">COOL STUFF</a>
        
        <!-- Center Section (Hamburger on mobile, Nav links on desktop) -->
        <div class="d-flex flex-grow-1 justify-content-center">
          <!-- Desktop Navigation -->
          <ul class="navbar-nav d-none d-lg-flex desktop-nav-links">
            <li class="nav-item"><a class="nav-link" routerLink="/home">HOME</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/gallery">GALLERY</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/services">SERVICES</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/staff">STAFF</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/testimonials">TESTIMONIALS</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/contact">CONTACT US</a></li>
            <li class="nav-item"><a class="nav-link">EXTRAS</a></li>
          </ul>
          
          <!-- Mobile Toggle (Centered) -->
          <button class="navbar-toggler mx-2 d-lg-none" type="button" 
                  data-bs-toggle="collapse" data-bs-target="#mobileNavContent"
                  aria-controls="mobileNavContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <!-- Right Section (Book Online) -->
        <div class="flex-grow-1 d-flex justify-content-end">
          <a class="btn btn-outline-light" href="#bookonline">BOOK ONLINE</a>
        </div>

        <!-- Mobile Collapsible Content -->
        <div class="collapse navbar-collapse d-lg-none mt-2" id="mobileNavContent">
          <ul class="navbar-nav text-center">
            <li class="nav-item"><a class="nav-link" routerLink="/home">HOME</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/about">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/gallery">GALLERY</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/services">SERVICES</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/staff">STAFF</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/testimonials">TESTIMONIALS</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/contact">CONTACT US</a></li>
            <li class="nav-item"><a class="nav-link">EXTRAS</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    /* Base styles */
    .navbar {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    
    .navbar-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 2rem;
      color: #e8c100ff;
      text-shadow: 2px 2px 8px rgba(224, 223, 223, 0.5);
      letter-spacing: 0.10em;
      max-width: 150px;
      white-space: nowrap;
    }
    
    .navbar-nav .nav-item {
      margin: 0 0.5rem;
      font-family: 'Bebas Neue', sans-serif;
    }
    
    .navbar-nav .nav-link {
      position: relative;
      color: #fff;
      transition: color 0.2s;
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
    }
    
    .navbar-nav .nav-link::after {
      content: '';
      display: block;
      width: 0;
      height: 3px;
      background: #e8c100ff;
      transition: width 0.2s;
      position: absolute;
      left: 0;
      bottom: 6px;
    }
    
    .navbar-nav .nav-link:hover,
    .navbar-nav .nav-link:focus,
    .navbar-nav .nav-link.active {
      color: #fff !important;
    }
    
    .navbar-nav .nav-link:hover::after,
    .navbar-nav .nav-link:focus::after,
    .navbar-nav .nav-link.active::after {
      width: 100%;
    }
    
    .btn.btn-outline-light {
      font-family: 'Bebas Neue', sans-serif;
      transition: background 0.2s, color 0.2s;
      font-size: 1.1rem;
      padding: 0.5rem 1.5rem;
      border-width: 2px;
      border-color: #e8c100ff;
    }
    
    .btn.btn-outline-light:hover,
    .btn.btn-outline-light:focus {
      background: #e8c100ff;
      color: #000 !important;
      border-color: #fcfcfcff;
    }
    
    /* Desktop Navigation Links - Pushed Right */
    @media (min-width: 992px) {
      .desktop-nav-links {
        transform: translateX(30px); /* Adjust this value to move right more/less */
        margin-right: -30px; /* Counteract the transform to maintain container width */
      }
    }
    
    /* Mobile styles */
    @media (max-width: 991.98px) {
      .navbar > .container-fluid {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      
      .navbar-toggler {
        position: absolute;
        left: 50%;
        transform: translateX(-65%) translateY(-18px);
        border: none;
      }
      
      .navbar-collapse {
        flex-basis: 100%;
      }
      
      .navbar-nav {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
      }
      
      .navbar-nav .nav-item {
        display: block;
        width: 100%;
        text-align: center;
        margin: 0.5rem 0;
      }
      
      .navbar-brand {
        flex-grow: 1;
        max-width: none;
      }
      
      .btn.btn-outline-light {
        margin-left: auto;
      }
    }
    
    /* Desktop styles */
    @media (min-width: 992px) {
      .navbar-toggler.d-lg-none {
        display: none !important;
      }
      
      .navbar-collapse.d-lg-none {
        display: none !important;
      }
      
      .navbar-nav.d-none.d-lg-flex {
        display: flex !important;
      }
    }
  `]
})
export class Header {}