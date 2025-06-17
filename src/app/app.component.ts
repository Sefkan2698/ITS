import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieBannerComponent } from './shared/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // ⬇️  CookieBannerComponent jetzt mit in den Imports
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

    <!-- fixed, bottom-aligned Banner -->
    <app-cookie-banner></app-cookie-banner>
  `
})
export class AppComponent {

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle(
      'IT-Service Kleve, Goch | Saka IT-Solutions – PC & Handy Hilfe'
    );

    this.metaService.updateTag({
      name: 'description',
      content:
        'IT-Service in Kleve, Goch und Kamp-Lintfort – PC-Reparatur, Handyhilfe & IT-Schulungen für Senioren. Persönlich, zuverlässig & vor Ort.'
    });
  }
}
