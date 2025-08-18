import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  //imports: [],
  template: `
    <section id="home" class="bg-primary text-white py-5">
      <div class="container text-center py-5">
        <h1 class="display-4">Hi, I'm [Your Name]</h1>
        <p class="lead">Frontend Developer | Angular + Bootstrap</p>
        <button class="btn btn-light btn-lg mt-3">Contact Me</button>
      </div>
    </section>
  `,
  styles: []
})
export class Hero {}
