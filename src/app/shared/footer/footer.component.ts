import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
  
})
export class FooterComponent {
  emailAddress = 'sakaits@gmx.de';
  currentYear = new Date().getFullYear();
}
