import {
  Component,
  HostBinding,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,      // ← unsere Styles schlagen global durch
  template: `
    <div class="cookie-backdrop">
      <div class="cookie-box">
        <p>Wir verwenden Cookies, um Ihre Erfahrung zu verbessern.</p>
        <button type="button" (click)="dismiss()">Ok, verstanden</button>
      </div>
    </div>
  `,
  styleUrls: ['./cookie-banner.component.css'],
})
export class CookieBannerComponent implements OnInit {
  /** Klasse "cookie-hidden" kommt/verschwindet am Host <app-cookie-banner> */
  @HostBinding('class.cookie-hidden') isHidden = false;

  private readonly storageKey = 'cookieBannerDismissed';
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.isHidden = localStorage.getItem(this.storageKey) === 'true';
    }
  }

  dismiss(): void {
    this.isHidden = true;
    if (this.isBrowser) {
      localStorage.setItem(this.storageKey, 'true');
    }
  }
}
