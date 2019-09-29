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
      cards: [
        {
          id: '1',
          name: 'Task 1',
          description: 'Description',
          dueDate: 'Sun Sep 29 2019 09:43:22 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '01',
            firstName: 'Sam',
            lastName: "Smith"
          }
        },
        {
          id: '5',
          name: 'Task 5',
          description: 'Description',
          dueDate: 'Sun Sep 29 2019 14:43:22 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '01',
            firstName: 'Sam',
            lastName: "Smith"
          }
        }
      ],
      isDoneSection: false,
    },
    {
      id: "2",
      name: "In progress",
      cards: [
        {
          id: '2',
          name: 'Task 2',
          description: 'Description',
          dueDate: 'Sun Sep 29 2019 16:43:22 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '02',
            firstName: 'Stam',
            lastName: "Smith"
          }
        }
      ],
      isDoneSection: false,
    },
    {
      id: "3",
      name: "Done",
      cards: [
        {
          id: '3',
          name: 'Task 3',
          description: 'Description',
          dueDate: 'Sun Sep 29 2019 07:43:22 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '03',
            firstName: 'Solomon',
            lastName: "Smith"
          }
        }
      ],
      isDoneSection: true,
    },
  ];

  @Input() public searchCriterion;

  constructor() {}

  ngOnInit() {}

  handleRemove({ id: cardId }) {
    this.cardList.forEach(card => {
      card.cards = card.cards.filter(({ id }) => id !== cardId);
    })
  }
}
