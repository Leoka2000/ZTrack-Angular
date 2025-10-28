import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog-hero-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './blog-hero-card.component.html',
})
export class BlogHeroCardComponent {
  constructor(private router: Router) {}

  goToBlog() {
    this.router.navigate(['/blog']);
  }
}
