import { Injectable } from '@angular/core';

import { PicturesService } from './pictures.service';
import { PictureModel } from './picture.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  selected_picture = new Subject<PictureModel>();

  constructor(private picturesService: PicturesService) {}

  getPictures() {
    return this.picturesService.pictures.slice();
  }

  getPicture(index: number) {
    this.selected_picture.next({ ...this.picturesService.pictures[index] });
  }
}
