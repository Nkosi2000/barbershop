import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section id="gallery" class="gallery-container">
      <div class="gallery-header">
        <h2 class="gallery-title">GALLERY</h2>
        <div class="title-divider"></div>
      </div>
      
      <div class="bento-grid">
        @for (image of getCurrentGroup(); track image; let i = $index) {
          <div class="bento-item" [style.animation-delay]="i * 0.1 + 's'">
            <div class="image-container">
              <img [src]="image" alt="Gallery image" class="bento-image" loading="lazy">
              <div class="image-overlay">
                <div class="zoom-icon"></div>
              </div>
            </div>
          </div>
        }
      </div>
      
      <div class="navigation-controls">
        <button class="nav-arrow left-arrow" (click)="previousGroup()" [disabled]="currentGroupIndex === 0" aria-label="Previous images">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="dots-container">
          @for (group of imageGroups; track group; let i = $index) {
            <button 
              class="dot" 
              [class.active]="i === currentGroupIndex"
              (click)="goToGroup(i)"
              [attr.title]="'Go to gallery page ' + (i + 1)"
              [attr.aria-label]="'Go to gallery page ' + (i + 1)">
            </button>
          }
        </div>
        
        <button class="nav-arrow right-arrow" (click)="nextGroup()" [disabled]="currentGroupIndex === imageGroups.length - 1" aria-label="Next images">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  `,
  styles: [`
    .gallery-container {
      background-color: #0a0a0a;
      padding: clamp(2rem, 5vw, 4.5rem) clamp(1rem, 4vw, 3rem);
      font-family: 'Inter', 'Helvetica Neue', sans-serif;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }
    
    .gallery-header {
      text-align: center;
      margin-bottom: clamp(2rem, 5vw, 3rem);
      position: relative;
      width: 100%;
      max-width: 1200px;
    }
    
    .gallery-title {
      font-size: 2.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #f9f6f2;
      font-family: 'Georgia', serif;
    }
    
    .title-divider {
      width: 60px;
      height: 2px;
      background-color: #d4af37;
      margin: 0 auto 30px;
    }
    
    .bento-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 2px;
      width: 100%;
      max-width: min(1000px, 95vw);
      margin: 0 auto clamp(2rem, 5vw, 2.5rem);
      border-radius: 1px;
      overflow: hidden;
      aspect-ratio: 1 / 1;
    }
    
    .bento-item {
      overflow: hidden;
      position: relative;
      aspect-ratio: 1;
      opacity: 0;
      animation: fadeInUp 0.5s ease forwards;
    }
    
    .image-container {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .bento-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
    
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.35);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.25s ease;
    }
    
    .zoom-icon {
      color: white;
      font-size: clamp(1.2rem, 4vw, 1.6rem);
      font-weight: 300;
      transform: scale(0.8);
      transition: transform 0.25s ease;
    }
    
    .bento-item:hover .bento-image {
      transform: scale(1.04);
    }
    
    .bento-item:hover .image-overlay {
      opacity: 1;
    }
    
    .bento-item:hover .zoom-icon {
      transform: scale(0.95);
    }
    
    .navigation-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: clamp(1rem, 3vw, 1.5rem);
      width: 100%;
      max-width: 1200px;
    }
    
    .nav-arrow {
      background: transparent;
      color: #ffffff;
      border: 2px solid #d4af37;
      border-radius: 0%;
      width: clamp(2.5rem, 8vw, 3.5rem);
      height: clamp(2.5rem, 8vw, 3.5rem);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.25s ease;
      flex-shrink: 0;
    }
    
    .nav-arrow:hover:not(:disabled) {
      background: #d4af37;
      border-color: #ffffff;
      color: #000;
      transform: translateY(-1px);
    }
    
    .nav-arrow:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }
    
    .nav-arrow:disabled:hover {
      transform: none;
      background: transparent;
    }
    
    .dots-container {
      display: flex;
      gap: clamp(0.5rem, 1.5vw, 0.625rem);
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .dot {
      width: clamp(0.4rem, 2vw, 0.5rem);
      height: clamp(0.4rem, 2vw, 0.5rem);
      border-radius: 0%;
      background: rgba(255, 255, 255, 0.15);
      cursor: pointer;
      transition: all 0.25s ease;
      border: none;
      padding: 0;
    }
    
    .dot.active {
      background: #d4af37;
      transform: scale(1.1);
    }
    
    .dot:hover:not(.active) {
      background: rgba(255, 255, 255, 0.4);
    }
    
    /* Animations */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Responsive design */
    @media (max-width: 768px) {
      .bento-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        max-height: unset;
        aspect-ratio: unset;
        height: auto;
        min-height: 70vh;
      }
      
      .bento-item {
        aspect-ratio: 1;
      }
    }
    
    @media (max-width: 480px) {
      .navigation-controls {
        flex-wrap: wrap;
      }
      
      .dots-container {
        order: 3;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
    
    /* Extra large screens */
    @media (min-width: 1600px) {
      .gallery-container {
        padding: 5rem 10%;
      }
      
      .bento-grid {
        max-width: 1200px;
      }
    }
    
    /* High DPI screens */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .bento-image {
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    }
  `]
})
export class Gallery {
  imageGroups = [
    [
      'bento/pic1.png',
      'bento/pic2.png',
      'bento/pic3.png',
      'bento/pic4.png',
    ],
    [
      'bento/pic5.png',
      'bento/pic6.png',
      'bento/pic7.png',
      'bento/pic8.png',
    ],
    [
      'bento/pic9.png',
      'bento/pic10.png',
      'bento/pic11.png',
      'bento/pic13.png',
    ],
    [
      'bento/pic14.png',
      'bento/pic15.png',
      'bento/pic16nose.png',
      'bento/pic17nose.png',
    ],
    [
      'bento/pic18.png',
      'bento/pic19.png',
      'bento/pic20.png',
      'bento/pic21.png',
    ],
    [
      'bento/pic22.png',
      'bento/pic23.png',
      'bento/pic24.png',
      'bento/pic25.png',
    ], 
    [
      'bento/pic26.png',
      'bento/pic27.png'
    ]
  ];
  
  currentGroupIndex = 0;
  
  getCurrentGroup() {
    return this.imageGroups[this.currentGroupIndex];
  }
  
  nextGroup() {
    if (this.currentGroupIndex < this.imageGroups.length - 1) {
      this.currentGroupIndex++;
    }
  }
  
  previousGroup() {
    if (this.currentGroupIndex > 0) {
      this.currentGroupIndex--;
    }
  }
  
  goToGroup(index: number) {
    this.currentGroupIndex = index;
  }
}