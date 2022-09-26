import { Component } from '@angular/core';

import { GalleryService } from './shared/gallery.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GalleryService],
})
export class AppComponent {
  title = 'ngDz5';
}
