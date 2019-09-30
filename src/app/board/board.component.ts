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
          dueDate: 'Wed Dec 04 2019 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
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
          dueDate: 'Tue Oct 01 2019 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '02',
            firstName: 'Stam',
            lastName: "Smith"
          }
        },
        {
          id: '4',
          name: 'Task 4',
          description: 'Description',
          dueDate: 'Sun Oct 06 2019 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
          assignee: {
            id: '04',
            firstName: 'Markus',
            lastName: "N"
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
