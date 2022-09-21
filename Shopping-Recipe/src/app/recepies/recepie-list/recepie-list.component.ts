import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css'],
})
export class RecepieListComponent implements OnInit {
  recipes: Recepie[] = [
    new Recepie(
      'Teszt recepie',
      'Teszt description',
      'https://static01.nyt.com/images/2021/11/21/dining/09EasyWeeknight-Roundup-top-art/merlin_195006771_cae41629-d1c8-4ae3-8d18-c32b67d1ecc0-superJumbo.jpg?quality=75&auto=webp'
    ),
    new Recepie(
      'Teszt recepie',
      'Teszt description',
      'https://static01.nyt.com/images/2021/11/21/dining/09EasyWeeknight-Roundup-top-art/merlin_195006771_cae41629-d1c8-4ae3-8d18-c32b67d1ecc0-superJumbo.jpg?quality=75&auto=webp'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
