import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface IconConfig {
  name: string;
  path: string;
}

const icons: IconConfig[] = [
  {
    name: 'appFacebook',
    path: '/assets/images/icons/social/facebook.svg',
  },
  {
    name: 'appInstagram',
    path: 'assets/images/icons/social/instagram.svg',
  },
  {
    name: 'appTelegram',
    path: 'assets/images/icons/social/telegram.svg',
  },
  {
    name: 'appTwitter',
    path: 'assets/images/icons/social/twitter.svg',
  },
  {
    name: 'appYoutube',
    path: 'assets/images/icons/social/youtube.svg',
  },
];

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule],
})
export class IconsModule {
  constructor(private readonly matIconRegistry: MatIconRegistry, private readonly domSanitizer: DomSanitizer) {
    icons.forEach((icon) => this.add(icon));
  }

  private add(config: IconConfig): void {
    this.matIconRegistry.addSvgIcon(config.name, this.domSanitizer.bypassSecurityTrustResourceUrl(config.path));
  }
}
