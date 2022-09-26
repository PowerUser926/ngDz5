import { Component, OnInit } from '@angular/core';

import { GalleryService } from '../shared/gallery.service';
import { PictureModel } from '../shared/picture.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})
export class PictureComponent implements OnInit {
  picture!: PictureModel;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.selected_picture.subscribe((picture) => {
      this.picture = picture;
    });
  }
}
