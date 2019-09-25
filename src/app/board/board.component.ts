import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"]
})
export class BoardComponent implements OnInit {
  cardList = [
    {
      id: "1",
      name: "Backlog",
      cards: []
    },
    {
      id: "2",
      name: "In progress",
      cards: []
    },
    {
      id: "3",
      name: "Done",
      cards: []
    }
  ];

  @Input() public searchCriterion;

  constructor() {}

  ngOnInit() {}

  removeCard({ cardId }) {
    this.cardList = this.cardList.filter(({ id }) => id !== cardId);
  }
}
