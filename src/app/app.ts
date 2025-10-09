import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Header } from './header/header';
import { About } from './about/about';
import { Services } from './services/services';
import { Staff } from './staff/staff';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { Gallery } from './gallery/gallery';
// import { Bookonline } from './bookonline/bookonline';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    Hero, 
    About, 
    Services, 
    Staff,
    Testimonials,
    Contact,
    Gallery, 
    // Bookonline, 
    Footer
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-gallery></app-gallery> 
    <app-services></app-services>
    <app-staff></app-staff>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <!-- <app-bookonline></app-bookonline> -->
    <app-footer></app-footer>
  `,
  styles: []
})
export class App {}
