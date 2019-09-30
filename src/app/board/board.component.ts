import { Component, OnInit, Input } from "@angular/core";
import { startData } from '../store';

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  public cardList;

  @Input() public searchCriterion;

  constructor() {}

  ngOnInit() {
    this.cardList = startData;
  }

  handleRemove({ id: cardId }) {
    this.cardList.forEach(card => {
      card.cards = card.cards.filter(({ id }) => id !== cardId);
    })
  }

  handleAddCard({ id }) {
    this.cardList.forEach(card => {
      if (card.id === id) {
        card.cards = [...card.cards, {
          id: this.createUniqueId(),
          name: 'NewTask (Test)',
          description: 'Description',
          dueDate: String(new Date('12/12/2019')),
          assignee: {
            id: this.createUniqueId(),
            firstName: 'Solomon',
            lastName: "Smith"
          }
        }];
      }
    })
  }

  createUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }
}
