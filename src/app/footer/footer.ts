import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  //imports: [],
  template: `
    <footer class="bg-dark text-white text-center py-4">
      <div class="container">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: []
})
export class Footer {}
