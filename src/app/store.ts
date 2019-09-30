const startData = [
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

export { startData };
