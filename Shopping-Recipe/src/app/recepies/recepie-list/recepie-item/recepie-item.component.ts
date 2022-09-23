import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css'],
})
export class RecepieItemComponent implements OnInit {
  @Input() recipe: Recepie;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
