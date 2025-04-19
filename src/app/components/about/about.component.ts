// about.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imagePath = 'assets/profilbild.jpg'; // Passen Sie den Dateinamen an

  ngOnInit() {
    // Debug-Ausgabe
    console.log('Bildpfad:', this.imagePath);
    
    // Überprüfen Sie, ob die Datei existiert
    fetch(this.imagePath)
      .then(response => console.log('Bild gefunden:', response.ok))
      .catch(error => console.error('Fehler beim Laden:', error));
  }
}