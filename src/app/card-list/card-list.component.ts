import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CardList } from '../models/CardList';
import { Card } from '../models/Card';

@Component({
  selector: "app-card-list",
  templateUrl: "./card-list.component.html",
  styleUrls: ["./card-list.component.scss"]
})
export class CardListComponent implements OnInit {
  @Input() public card;

  @Input() public searchCriterion: string;

  @Output() public removeCard = new EventEmitter();

  @Output() public addCard = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleRemove($event) {
    this.removeCard.emit($event);
  }

  handleAddCard() {
    console.log('hey')

    this.addCard.emit(this.card);
  }
}
