import { Injectable } from '@angular/core';

import { PictureModel } from './picture.model';

@Injectable({
  providedIn: 'root',
})
export class PicturesService {
  constructor() {}

  pictures: PictureModel[] = [
    {
      name: 'Мона Ліза',
      year: 'приблизно 1503 рік',
      artist: 'Леонардо да Вінчі',
      location: 'Лувр, Париж',
      src: '../../assets/img/mona-lisa.jpg',
    },
    {
      name: 'Дівчина з перловою сережкою',
      year: '1665 рік',
      artist: 'Яна Вермера',
      location: 'Мауріцгейс, Гаага',
      src: '../../assets/img/girl-with-a-pearl-earring.jpg',
    },
    {
      name: 'Народження Венери',
      year: '1485-1486',
      artist: 'Сандро Боттічеллі',
      location: 'Галерея Уффіці, Флоренція',
      src: '../../assets/img/birth-of-venus-botticelli.jpg',
    },
    {
      name: 'Під хвилею Канаґавського моря',
      year: '1829-1832',
      artist: 'Кацусіки Хокусая',
      location: 'Британський музей, Лондон',
      src: '../../assets/img/great-wave-hokusai.jpg',
    },
    {
      name: 'Зоряна ніч',
      year: '1889',
      artist: 'Вінсент Ван Гог',
      location: 'Музей сучасного мистецтва, Нью-Йорк',
      src: '../../assets/img/the-starry-night-vincent.jpg',
    },
    {
      name: "Постійність пам'яті",
      year: '1931',
      artist: 'Сальвадор Далі',
      location: 'Музей сучасного мистецтва, Нью-Йорк',
      src: '../../assets/img/the-persistence-of-memory.jpg',
    },
  ];
}
