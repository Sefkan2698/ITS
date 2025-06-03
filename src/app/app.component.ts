import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'it-services';

  constructor(private titleService: Title, private metaService: Meta) {
    this.titleService.setTitle('IT-Service Kamp-Lintfort | Saka IT-Solutions – PC & Handy Hilfe');
    this.metaService.updateTag({
      name: 'description',
      content: 'IT-Service in Kamp-Lintfort, Geldern & Goch – PC-Reparatur, Handyhilfe & IT-Schulungen für Senioren. Persönlich, zuverlässig & vor Ort.'
    });
  }
}
