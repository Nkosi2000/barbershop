import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  //imports: [],
  template: `
    <section id="about" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">About Me</h2>
        <div class="row">
          <div class="col-md-6">
            <p>I'm a beginner web developer passionate about Angular and Bootstrap.</p>
          </div>
          <div class="col-md-6">
            <h5>Skills:</h5>
            <ul>
              <li>HTML/CSS</li>
              <li>Angular</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class About {}
