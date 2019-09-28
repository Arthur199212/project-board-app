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

  @Output() removeCard = new EventEmitter<Card>();

  constructor() {}

  ngOnInit() {}
}
