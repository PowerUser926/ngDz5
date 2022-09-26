import { Component, OnInit } from '@angular/core';

import { PictureModel } from '../shared/picture.model';
import { GalleryService } from '../shared/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  pictures: PictureModel[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.pictures = this.galleryService.getPictures();
  }

  selectPicture(index: number) {
    this.galleryService.getPicture(index);
  }
}
