import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchCriteriaPipe } from '../pipes/search-criteria.pipe';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() public cardItem;

  @Input() public query;

  @Input() public isDone: boolean;

  @Output() public removeCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleRemove(card) {
    this.removeCard.emit(card);
  }

}
